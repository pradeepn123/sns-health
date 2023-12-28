<script>
    export let dropdownData;
    
    const {wrapperClass = "" , options = {} , openIcon = '', closeIcon = '' , title="" , changeCallBack} = dropdownData || {};
    let selectedValue  = Object.keys(options)[0];
    let isOpen = false;
    
    const toggleDropdown = () => isOpen = !isOpen;
    
    const handleDropdownChange = (ev) => {
      selectedValue = ev.target.closest('[data-value]').dataset.value;
      changeCallBack(selectedValue); //update the selected sort
      toggleDropdown();
    }

    document.addEventListener('click', (ev) => {
      const isDropdownTarget = ev.target.closest('[data-dropdown-container]');
      if(isDropdownTarget) return;
      if(isOpen) {
        toggleDropdown();
      }
    })
    </script>
    
    <div class={`dropdown dropdown__${wrapperClass}`} data-dropdown-container>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="dropdown__selected" on:click={toggleDropdown}>
          <div class="dropdown__title">{title}</div>
          <div class="dropdown__selected-value">{options[selectedValue]}</div>
          <div class="dropdown__icon">{#if isOpen}{@html openIcon} {:else } {@html closeIcon} {/if}</div>
      </div>
      <div class={`dropdown__container ${wrapperClass}__container`} aria-hidden={!isOpen}>
          <div class={`dropdown__items ${wrapperClass}__items`}>
            <div class={`dropdown__header ${wrapperClass}__header`}>
              <p class="custom-filter_heading"> Sort By </p>
              <button class={`dropdown__${wrapperClass}-close`} on:click={toggleDropdown}>
                <svg focusable="false" class="icon icon--close" viewBox="0 0 19 19" role="presentation">
                  <path d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z" fill="currentColor" fill-rule="evenodd"></path>
                </svg>
              </button>
            </div>
            {#each Object.keys(options) as key} 
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                {#if key != selectedValue} 
                <div class={`dropdown__item ${wrapperClass}__item`} data-value={key} on:click={handleDropdownChange}>{options[key]}</div>
                {:else}
                  <div class={`dropdown__item ${wrapperClass}__item is-selected`} data-value={key} on:click={handleDropdownChange}>{options[key]}</div>
                {/if}
            {/each}
        </div>
      </div>
        <button class={`dropdown__${wrapperClass}-overlay`} on:click={toggleDropdown}></button>
    </div>
    
    <style>
       .dropdown {
        cursor: pointer;
       } 
    </style>