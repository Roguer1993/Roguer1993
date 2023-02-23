const body = document.querySelector("body"),
      sidebar = document.querySelector(".sidebar"),
      toggle = document.querySelector(".toggle"),
      searchBtn = document.querySelector(".search-box"),
      modeSwtich = document.querySelector(".toggle_switch"),
      modeText = document.querySelector(".mode-text"),
      botonswitch = document.querySelector(".switch"),
      minimenu = document.querySelector(".menuredes"),
      minimenuver = document.querySelector(".ver");
      

      toggle.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
      });

      searchBtn.addEventListener("click", ()=>{
        sidebar.classList.remove("close");
      });
      
      minimenu.addEventListener('click',()=>{/// boton de mini menu
        document.querySelector('ocul').style.display = 'none';
      });

      modeSwtich.addEventListener("click", ()=>{
        body.classList.toggle("dark");
        if(body.classList.contains("dark")){
            modeText.innerText = "Mode Light"
        }else{
            modeText.innerText = "Mode Dark"
        }

        
      });

      