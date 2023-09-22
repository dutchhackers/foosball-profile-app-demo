<script>
    import { signOut } from 'firebase/auth';
    import { userStore } from 'sveltefire';
    import { auth } from '../firebase';
  
    let user = userStore(auth);
    let dropdownVisible = false;
  
    function toggleDropdown() {
      dropdownVisible = !dropdownVisible;
    }
  
    function closeDropdown(event) {
      if (dropdownVisible && !event.target.closest(".profile-container")) {
        dropdownVisible = false;
      }
    }
  
    window.addEventListener('click', closeDropdown);
  </script>
  
  <div class="profile-container">
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img on:click={toggleDropdown} id="profile-picture" src="/Generic-Profile-Placeholder-v3.png" alt="profile" />
    <div class="dropdown" style={dropdownVisible ? 'display:block' : 'display:none'}>
      <ul>
        <li>{$user?.displayName}</li>
        <li>
          <button
            on:click={() => {
              signOut(auth);
            }}>Sign Out</button
          >
        </li>
      </ul>
    </div>
  </div>

<style>
	.profile-container {
		top: 10px;
		right: 30px;
		position: absolute;
		display: inline-block;
	}

	#profile-picture {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		cursor: pointer;
	}

	.dropdown {
		display: none;
		position: absolute;
		top: 100%;
		right: -18px;
		background-color: #fff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
	}

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	ul li {
		padding: 10px;
        color: black;
		text-align: right;
	}

	ul li button {
        cursor: pointer;
        background-color: black;
		color: white;
		text-decoration: none;
		display: block;
        border: none;
        border-radius: 5px;
        transition: 100ms;
	}

	ul li button:hover {
        scale: 1.1;
	}
</style>
