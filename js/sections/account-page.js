import reactWrapper from "JsComponents/react-wrapper";
import AccountPage from "ReactComponents/AccountPage";

export default () => {
    reactWrapper(AccountPage, 'account-page', '#account-data');
}