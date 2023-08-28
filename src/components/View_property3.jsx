import React, { useState } from 'react'
import Footer from './Footer'
import Nav from './Nav'
import * as mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';
import house1 from './img/3-1.jpeg';
import house2 from './img/3-2.jpg';
import house3 from './img/3-3.jpg';
import house4 from './img/3-4.jpg';
import house5 from './img/3-5.jpeg';
const View_property3 = () => {
    document.title = "View Property";
    const [time, setTime] = useState(0);
    const divv = document.getElementById('map');
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1YmhhbS0yMTA2IiwiYSI6ImNsanBkcWpzaDAyYzIzcG8wem80dTlwNGoifQ.Wq4Ac9g2DsvDZRsV9EjG1Q';
    useEffect(() => {
      setTimeout(() => {
        setTime(time+1);
      }, 1000);
    if(time > 4){
            
const map = new mapboxgl.Map({
    container: divv, // container ID
    style: 'mapbox://styles/shubham-2106/clk28bv4k004s01pg6odn61bs', // style URL
    center: [79.4636, 29.3803], // starting position [lng, lat]
    zoom: 10.50, // starting zoom
});

map.on('load', () => {
    map.addSource('places', 
    {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "properties": {
                "description": "<strong>Nainital Retreat</strong><p><a href=\"view_property.html\" target=\"_blank\" title=\"Opens in a new window\">Nainital Retreat</a></p>",
                "icon": "marker-editor"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [79.4636, 29.3803]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": "<strong>Mussoorie Heights</strong><p><a href=\"view_property1.html\" target=\"_blank\" title=\"Opens in a new window\">Mussoorie Heights</a></p>",
                "icon": "marker-editor"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [78.2186, 30.4546]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": "<strong>Haridwar Serenity</strong><p><a href=\"view_property2.html\" target=\"_blank\" title=\"Opens in a new window\">Haridwar Serenity</a></p>",
                "icon": "marker-editor"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [78.1684, 29.9457]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": "<strong>Dehradun Bliss</strong><p><a href=\"view_property3.html\" target=\"_blank\" title=\"Opens in a new window\">Dehradun Bliss</a></p>",
                "icon": "marker-editor"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [78.0322, 30.3165]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": "<strong>Rishikesh Adventure</strong><p><a href=\"view_property4.html\" target=\"_blank\" title=\"Opens in a new window\">Rishikesh Adventure</a></p>",
                "icon": "marker-editor"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [78.2670, 30.0862]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": "<strong>Uttarakhand Festival</strong><p>Celebrate the diverse culture of Uttarakhand at this annual festival featuring traditional music, dance, and local cuisine.</p>",
                "icon": "music"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [79.4636, 30.3165]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": "<strong>Nature Trek</strong><p>Embark on a breathtaking trekking adventure through the scenic landscapes of Uttarakhand. Don't miss the chance to connect with nature!</p>",
                "icon": "hiking"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [78.2670, 29.3803]
              }
            }
          ]
        }
      }
      
    );
    // Add a layer showing the places.
    map.addLayer({
    'id': 'places',
    'type': 'symbol',
    'source': 'places',
    'layout': {
    'icon-image': ['get', 'icon'],
    'icon-allow-overlap': true
    }
    });
     
    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', (e) => {
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;
     
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
     
    new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(description)
    .addTo(map);
    });
     
    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', () => {
    map.getCanvas().style.cursor = 'pointer';
    });
     
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', () => {
    map.getCanvas().style.cursor = '';
    });
    });
    map.on('click', (event) => {
      // If the user clicked on one of your markers, get its information.
      const features = map.queryRenderedFeatures(event.point, {
        layers: ['map_1'] // replace with your layer name
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];
    
      const popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature.geometry.coordinates)
      .setHTML(
        `<h3>${feature.properties.title}</h3>
        <p>${feature.properties.description}</p>`
      )
      .addTo(map);
    });
    map.addControl(new mapboxgl.NavigationControl());
    }
      
    }, [time])

    return (
        <>
            <Nav />

            <section className="view-property">

                <div className="details">
                    <div className="thumb">
                        <div className="big-image">
                            <img src={house1} alt="" />
                        </div>
                        <div className="small-images">
                            <img src={house2} alt="" />
                            <img src={house3} alt="" />
                            <img src={house4} alt="" />
                            <img src={house5} alt="" />
                        </div>
                    </div>
                    <h3 class="name">Modern Flats and Appartments</h3>
      <p class="location"><i class="fas fa-map-marker-alt"></i><span>Uttarakhand, India </span></p>
      <div class="info">
         <p><i class="fas fa-tag"></i><span>30 lac</span></p>
         <p><i class="fas fa-user"></i><span>Tarun (owner)</span></p>
         <p><i class="fas fa-phone"></i><a href="tel:1234567890">1234567890</a></p>
         <p><i class="fas fa-building"></i><span>Flat</span></p>
         <p><i class="fas fa-house"></i><span>Sale</span></p>
         <p><i class="fas fa-calendar"></i><span>10-02-2023</span></p>
      </div>
      <h3 class="title">Details</h3>
      <div class="flex">
         <div class="box">
            <p><i>Rooms :</i><span>5 BHK</span></p>
            <p><i>Deposit amount :</i><span>0</span></p>
            <p><i>Status :</i><span>Ready to move</span></p>
            <p><i>Bedroom :</i><span>5</span></p>
            <p><i>Bathroom :</i><span>5</span></p>
            <p><i>Balcony :</i><span>3</span></p>
         </div>
         <div class="box">
            <p><i>Carpet area :</i><span>1350sqft</span></p>
            <p><i>Age :</i><span>3 years</span></p>
            <p><i>Room floor :</i><span>3</span></p>
            <p><i>Total floors :</i><span>22</span></p>
            <p><i>Furnished :</i><span>semi-furnished</span></p>
            <p><i>Loan :</i><span>available</span></p>
         </div>
      </div>
      <h3 class="title">Amenities</h3>
      <div class="flex">
         <div class="box">
            <p><i class="fas fa-check"></i><span>Lifts</span></p>
            <p><i class="fas fa-check"></i><span>Security guards</span></p>
            <p><i class="fas fa-times"></i><span>Play ground</span></p>
            <p><i class="fas fa-check"></i><span>Gardens</span></p>
            <p><i class="fas fa-check"></i><span>Water supply</span></p>
            <p><i class="fas fa-check"></i><span>Power backup</span></p>
         </div>
         <div class="box">
            <p><i class="fas fa-check"></i><span>Parking area</span></p>
            <p><i class="fas fa-times"></i><span>Gym</span></p>
            <p><i class="fas fa-check"></i><span>Shopping mall</span></p>
            <p><i class="fas fa-check"></i><span>Hospital</span></p>
            <p><i class="fas fa-check"></i><span>Schools</span></p>
            <p><i class="fas fa-check"></i><span>Market area</span></p>
         </div>
      </div>
      <h3 class="title">Description</h3>
      <p class="description">It is a very budget friendly appartment you will get.</p>
                    <form action="" method="post">
                        <input type="submit" value="save property" name="save" className="inline-btn" />
                    </form><br /><br /><br /><br />
                    <h1 className="title">Search on Map</h1>

                    <main className="pt-2">
                        <div className="Container">
                            <div id="map">
                            {time >= 0 && time < 5 &&
                                    <section class="dots-container">
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                    </section>
                                }
                            </div>
                        </div>
                    </main>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default View_property3
