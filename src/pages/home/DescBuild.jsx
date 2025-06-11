import React from 'react';

const DescriptionBuild = () => {
  return (
    <div className="containerInfo">
            <div className="titleDesc-btn">
              <h2>Building Types</h2>
              <div className='btn-materials'>
                <span>Fabric</span>
                <span>Metal</span>
              </div>
           
            </div>
           
            <div className='img-descWrapper'>
              <div className='logoBuild'>
                <div className="imageBuilding">
                  <div className='containerLogo'>
                    <img src="/image.svg" alt="a building design" />
                  </div>
                  
                </div>
                
              </div>

              
              
              
              <div className='box-description'>
                <h3>Type: Magnum</h3>
                <button class="dropdown-btn">
                  Usage Category
                  <span className='arrow'>&#8744;</span>
                </button>
                <div className="description">
                  <p>Born from the Latin "Magnus", meaning "Great", the Magnum Series delivers unmatched height, heavy-dury strenght, and serious snow-load resilience engineered for big performance without the big price tag.</p>
                </div>
                <div className="characteristics">
                  <h4>Characteristics</h4>
                  <ol>
                    <li>Provide strength and size</li>
                    <li>Tall clearances can withstand heavy snow loads</li>
                    <li>Truss spacing optimized for efficiency and cost savings</li>
                  </ol>
                </div>
              </div>
              <div className='btn-resquest'><span>Project Request</span></div>
            </div>
            
           
    </div>
  );
};

export default DescriptionBuild;