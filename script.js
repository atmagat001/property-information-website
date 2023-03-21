let http = new XMLHttpRequest();

http.open('get', 'data.json', true);

http.send();

http.onload = function() {
    if(this.readyState== 4 && this.status == 200) {
        let listings = JSON.parse(this.responseText);
        let output = "";
        let links ="";
       
        for (let item of listings) {
            output += `

            <li class="listing-container">
                <div class="listing">                  
                 
                    <div class="prop" style="background:url(./images/${item.image});
                        background-size: cover;
                        border-radius: 20px;
                        background-repeat: no-repeat;
                        background-color: lightblue;">
                    </div>

                    <div class="details-container">

                            <p class="details name">${item.name}</p>
                            <p class="details classification">Asset Classification: ${item.classification}</p>
                            <p class="details">${item.address}</p>
                            

                            <p class="details">Valuation per sqm: Phpxxx</p>
                            <p class="details">Zonal Value per sqm: Phpxxx</p>
                            <p class="details">Total Asset Value: Phpxxx</p>

                            <p class="details reco">Recommendation: Hold</p>
                            <p class="details reco">Location Map:</p>


                            <div class="links-container">
                                <a href="${item.maplink} target="_blank" rel="noopener noreferrer" class="details">Google maps link</a>
                                <a href="${item.streetview}" class="details">Google Streetview</a>
                                
                            </div>
                           
                    </div>
                
                </div>
                <p>Property Number ${item.index} of 34</>
        
            </li>
            
            `
        }
       
        document.getElementById("listings").innerHTML = output;
        document.querySelectorAll("li")[0].setAttribute("id","active-slide")
        
       

    }
}

/* movement of slides */
    let offset = 1;
    let nextbutton = document.getElementsByClassName("next")[0];
    let previousbutton = document.getElementsByClassName("previous")[0];

    nextbutton.addEventListener("click", slideNext)
    previousbutton.addEventListener("click", slidePrevious)
    function slideNext() {
        offset = 1
        slideMovement()
    }

    function slidePrevious() {
        offset = -1
        slideMovement()
    }

    function slideMovement() {
        let slides = document.querySelectorAll("li");
        let activeSlide = document.getElementById("active-slide");
        let newIndex = [...slides].indexOf(activeSlide) + offset;

        if (newIndex >= slides.length) newIndex= 0;
        if (newIndex < 0) newIndex = slides.length - 1;

        activeSlide.removeAttribute("id")
        slides[newIndex].setAttribute("id","active-slide")
        offset = 0;
        
    }