import React, { useEffect, useState } from "react";

export default ({ data }) => {
  const [customerInfo, setCustomerInfo] = useState({ ...data })
  const [infoChanged, setInfoChanged] = useState(false);
  const [enablePassword, setEnablePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userPassword, setUserPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [formError, setFormError] = useState(false)
  const [updateSuccess, setUpdateSuccess] = useState(false);

  function handleInputChange() {
    const inputEl = event.target;
    let info = customerInfo;
    if (event.target.name == 'mobile number') {
      info[event.target.name] = event.target.value.replace(/[^0-9+]/g, "")
    } else {
      info[event.target.name] = event.target.value
    }
    setCustomerInfo({ ...info })
    setInfoChanged(true)
    setFormError(false)
    event.target.classList?.remove('error');
    if (event.target.value == '') event.target.classList.add('error');
  }

  function clearEdits() {
    setCustomerInfo({ ...data })
    setInfoChanged(false);
    setEnablePassword(false)
    setFormError(false)
    Object.keys(customerInfo).forEach((info) => {
      document.querySelector(`[name="${info}"]`).classList?.remove('error');
    })
  }

  function handlePasswordChange() {
    setUserPassword(event.target.value)
    setPasswordError(false)
    if (event.target.value == '') event.target.classList.add('error');
  }

  function validateForm() {
    return Object.keys(customerInfo).filter((info) => {
      return customerInfo[info] == ''
    })
  }

  useEffect(() => {
    enablePassword ? document.getElementById('password')?.focus() : null;
  }, [enablePassword])

  async function handleFormSubmit() {
    let submitBtn = event.target;
    submitBtn.setAttribute("disabled", "disabled")
    try {
      if (validateForm().length > 0) {
        throw { 'key': validateForm(), 'data': `${validateForm().join(', ').replaceAll('_', ' ')}  cannot be empty` };
      } else if (userPassword.length == 0) {
        throw { key: 'password', data: 'Incorrect password' };
      }
      console.log(userPassword)
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("X-Shopify-Storefront-Access-Token", "bc613e26638752aae34fdeeac6210cf0");
      let graphql = {
        query: `mutation customerAccessTokenCreate ($input: CustomerAccessTokenCreateInput!){
        customerAccessTokenCreate(input: $input) {
          customerAccessToken {
            accessToken
              expiresAt
          }
          customerUserErrors {
              code
              field
              message
          }
        }
      }`
        ,
        variables: { "input": { "email": data.email, "password": userPassword } }
      }
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(graphql)
      };
      let accessToken = await fetch("/api/2024-01/graphql.json", requestOptions).then(response => response.json()).then(data => data?.data?.customerAccessTokenCreate?.customerAccessToken?.accessToken)
      if (!accessToken) throw { key: 'password', data: 'Incorrect password' };
      let updateCustomer = {
        query: `mutation customerUpdate($customer: CustomerUpdateInput!, $customerAccessToken: String!) {
        customerUpdate(customer: $customer, customerAccessToken: $customerAccessToken) {
          customer {
              phone
              firstName
              lastName
          }
          customerUserErrors {
              code
              field
              message
          }
        }
      }`
        ,
        variables: { "customer": { email: customerInfo['email'], phone: customerInfo['mobile number'].trim(), firstName: customerInfo['first_name'].trim(), lastName: customerInfo['last_name'].trim() }, "customerAccessToken": accessToken }
      }
      let requestOptions2 = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(updateCustomer)
      };
      let customerUpdate = await fetch("/api/2024-01/graphql.json", requestOptions2).then(response => response.json()).then(data => data)
      let customerError = customerUpdate.data['customerUpdate'].customerUserErrors[0]?.message;
      if (customerError) throw customerError;
      console.log(customerUpdate);
      setUpdateSuccess(true);
      setEnablePassword(false);
      setUserPassword('');
      setInfoChanged(false)
      setTimeout(() => {
        setUpdateSuccess(false);
      }, 5000);
    } catch (error) {
      console.log(error)
      if (typeof error == 'string') {
        setFormError(true)
        document.querySelector('.account_profile-update-form-error span').textContent = error;
      } else if (error.key == 'password') {
        setPasswordError(true)
        document.getElementById('password')?.focus()
      } else if (error.key?.length > 0) {
        setFormError(true)
        document.querySelector('.account_profile-update-form-error span').textContent = error.data;
        error.key.forEach(field => {
          document.querySelector(`[name="${field}"]`).classList.add('error');
        })
      }
    } finally {
      submitBtn.removeAttribute("disabled")
    }
  }
  return (
    <div>
      <div className="account_profile-header account_header">
        <h2 className="account_title">Personal Information</h2>
      </div>
      <div className={`account_profile-update-form-error${!formError ? ' hidden' : ''}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 256 256"
        >
          <g fill="none" strokeMiterlimit="10" strokeWidth="1">
            <path
              fill="#E80000"
              d="M45 90C20.187 90 0 69.813 0 45S20.187 0 45 0s45 20.187 45 45-20.187 45-45 45z"
              transform="matrix(2.81 0 0 2.81 1.407 1.407)"
            ></path>
            <path
              fill="#FFF"
              d="M45 60.473a4.516 4.516 0 01-4.515-4.515v-36.44a4.516 4.516 0 019.03 0v36.44A4.516 4.516 0 0145 60.473zM45 75.003a4.55 4.55 0 01-3.195-1.333 5.414 5.414 0 01-.564-.677 4.669 4.669 0 01-.406-.79 4.49 4.49 0 01-.26-.836 4.684 4.684 0 01-.09-.88c0-1.197.485-2.359 1.321-3.195.214-.215.44-.407.688-.564.249-.17.508-.305.779-.418.271-.112.553-.203.847-.26a4.657 4.657 0 011.761 0c.294.057.576.148.847.26.27.112.53.248.778.418.248.158.474.349.689.564a4.553 4.553 0 011.321 3.195 4.538 4.538 0 01-1.321 3.182 4.03 4.03 0 01-.689.564 5.114 5.114 0 01-.778.418 4.553 4.553 0 01-1.728.352z"
              transform="matrix(2.81 0 0 2.81 1.407 1.407)"
            ></path>
          </g>
        </svg>
        <span></span>
      </div>
      <div className="account_profile-content-wrapper">
        {Object.keys(customerInfo).map((block, i) =>
          <div className="account_profile-content-block" key={`${block}-${i}`}>
            <label htmlFor={block}>{block.replace("_", " ")} {block == 'mobile number' ? "(include country code)" : ''}</label>
            {block == "email" ?
              <input type="text" id={block} name={block} value={customerInfo[block]} disabled></input>
              :
              <input type={block == 'mobile number' ? 'tel' : 'text'} id={block} name={block} value={customerInfo[block] || ''} onChange={handleInputChange}></input>}
          </div>
        )}
      </div>
      {enablePassword ?
        <div className="account_profile-update-btn-wrapper">
          <div className="account_profile-update-password-wrapper account_profile-content-block">
            <label htmlFor="password">Please confirm your password</label>
            <input type={showPassword ? "text" : "password"} id="password" name="password" className={`account_profile-update-password${passwordError ? " error" : ""}`} placeholder="Please confirm your password" value={userPassword} onChange={handlePasswordChange} />
            {passwordError && <div className="account_profile-update-password-error">Incorrect password</div>}
            <div className="account_profile-show-password">
              <input type="checkbox" id="show_password" name="show_password" className="account_profile-show-password-check" value={showPassword} onChange={() => setShowPassword(!showPassword)} />
              <label htmlFor="show_password" className="account_profile-show-password-label">  Show Password</label>
            </div>
          </div>
          <button className="button account_profile-update-btn account_profile-update-btn-cancel" onClick={clearEdits}>Cancel</button>
          <button className="button account_profile-update-btn account_profile-update-btn-save" onClick={handleFormSubmit}>Confirm Save</button>
        </div>
        :
        infoChanged &&
        <div className="account_profile-update-btn-wrapper">
          <button className="button account_profile-update-btn account_profile-update-btn-cancel" onClick={clearEdits}>Reset</button>
          <button className="button account_profile-update-btn account_profile-update-btn-save" onClick={() => setEnablePassword(true)}>Save</button>
        </div>
      }
      {updateSuccess &&
        <>
          <div className="account_profile-update-success">Profile has been updated successfully</div>
          <div className="account_profile-update-error"></div>
        </>
      }
    </div>
  )
}