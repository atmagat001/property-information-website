let http = new XMLHttpRequest();

http.open('get', 'data.json', true);

http.send();

http.onload = function() {
    if(this.readyState== 4 && this.status == 200) {
        let listings = JSON.parse(this.responseText);
        let output = "";
       
        for (let item of listings) {
            output += `

            <div class="listing-container">
                <div class="listing">
                    
                
                    <div class="prop" style="background:url(./images/${item.image});
                        background-size: cover;
                        border-radius: 20px;
                        background-repeat: no-repeat;">
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
                                <a href="${item.maplink}" class="details">Google maps link</a>
                                <a href="${item.streetview}" class="details">Google Streetview</a>
                                
                            </div>

                            <div class="iframe">
                                ${item.embedlink}
                            </div>
                            
                    
                    </div>
                
                </div>
        
            </div>
            
            `
        }
       
        document.getElementById("listings").innerHTML = output;
    }
}