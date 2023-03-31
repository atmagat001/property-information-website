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
                 
                    <div class="prop-img" style="background:url(./images/${item.image});
                        background-size: cover;
                        border-radius: 20px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-color: lightblue;">
                    </div>

                    <div class="details-container">

                            <p class="details name">${item.name}</p>
                            <p class="details classification">Asset Classification: ${item.classification}</p>
                            <p class="details">Address: ${item.address}</p>
                            

                            


                            <div class="links-container">
                                <a href="${item.maplink} target="_blank" rel="noopener noreferrer" class="details">Google maps link</a>
                                <a href="${item.streetview}" class="details">Google Streetview</a>
                                
                            </div>
                           
                            <table>
                            <tr>
                                <th>Asset Type</th>
                                <th>Area </th>
                                <th>Slot</th>
                                <th>Value per Sqm or Slot</th>
                                <th>Total Value</th>
                                
                            </tr>
                    
                            <tr>
                                <th>Lot</th>
                                <td>${Number(item.lotArea).toLocaleString("en-US")}</td>
                                <td></td>
                                <td>${Number(item.lotPersqm).toLocaleString("en-US")}</td>
                                <td>${Number(item.lotValue).toLocaleString("en-US")}</td>
                    
                            </tr>
                    
                            <tr>
                                <th>Residential</th>
                                <td>${Number(item.resiArea).toLocaleString("en-US")}</td>
                                <td></td>
                                <td>${Number(item.resiPersqm).toLocaleString("en-US")}</td>
                                <td>${Number(item.resiValue).toLocaleString("en-US")}</td>
                            </tr>
                    
                            <tr>
                                <th>Office</th>
                                <td>${Number(item.officeArea).toLocaleString("en-US")}</td>
                                <td></td>
                                <td>${Number(item.officePersqm).toLocaleString("en-US")}</td>
                                <td>${Number(item.officeValue).toLocaleString("en-US")}</td>
                            </tr>
                    
                            <tr>
                                <th>Retail</th>
                                <td>${Number(item.retailArea).toLocaleString("en-US")}</td>
                                <td></td>
                                <td>${Number(item.retailPersqm).toLocaleString("en-US")}</td>
                                <td>${Number(item.retailValue).toLocaleString("en-US")}</td>
                            </tr>
                    
                            <tr>
                                <th>Parking</th>
                                <td></td>
                                <td>${Number(item.parkingSlot).toLocaleString("en-US")}</td>
                                <td>${Number(item.parkingPerslot).toLocaleString("en-US")}</td>
                                <td>${Number(item.parkingValue).toLocaleString("en-US")}</td>
                            </tr>
                    
                            <tr class="lower-table">
                                <td>Total Asset Value</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>${Number(item.totalValue).toLocaleString("en-US")}</td>
                            </tr>
                        </table>
                    </div>
                
                </div>

                <div><p class="property-number"><strong>Property Number ${item.index} of 34</strong></></div>
                <div class="maps">${item.embedlink}</div>
        
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