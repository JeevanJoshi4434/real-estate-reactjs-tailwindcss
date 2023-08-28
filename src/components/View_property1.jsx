import React, { useState } from 'react'
import Footer from './Footer'
import Nav from './Nav'
import * as mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';
import house1 from './img/5-1.jpg';
import house2 from './img/5-2.jpg';
import house3 from './img/5-3.jpg';
import house4 from './img/5-4.jpeg';
import house5 from './img/5-5.jpeg';
const View_property1 = () => {
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
    center: [80.9462, 26.8467], // starting position [lng, lat]
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
                "description": "<strong>Lucknow Landmark</strong><p><a href=\"view_property.html\" target=\"_blank\" title=\"Opens in a new window\">Lucknow Landmark</a></p>",
                "icon": "marker-editor"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [80.9462, 26.8467]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": "<strong>Agra Heights</strong><p><a href=\"view_property1.html\" target=\"_blank\" title=\"Opens in a new window\">Agra Heights</a></p>",
                "icon": "marker-editor"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [78.0183, 27.1767]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": "<strong>Kanpur Skies</strong><p><a href=\"view_property2.html\" target=\"_blank\" title=\"Opens in a new window\">Kanpur Skies</a></p>",
                "icon": "marker-editor"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [80.3200, 26.4499]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": "<strong>Allahabad Greens</strong><p><a href=\"view_property3.html\" target=\"_blank\" title=\"Opens in a new window\">Allahabad Greens</a></p>",
                "icon": "marker-editor"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [81.8432, 25.4358]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": "<strong>Varanasi Charm</strong><p><a href=\"view_property4.html\" target=\"_blank\" title=\"Opens in a new window\">Varanasi Charm</a></p>",
                "icon": "marker-editor"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [82.9560, 25.3176]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": "<strong>Prayagraj Horizon</strong><p><a href=\"view_property5.html\" target=\"_blank\" title=\"Opens in a new window\">Prayagraj Horizon</a></p>",
                "icon": "marker-editor"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [81.8463, 25.4358]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": "<strong>Music Fest</strong><p>The annual Uttar Pradesh Music Festival features local and international artists in a two-day celebration of music. Don't miss out!</p>",
                "icon": "music"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [80.9462, 26.4499]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": "<strong>Cultural Exhibition</strong><p>Explore the rich cultural heritage of Uttar Pradesh at this exhibition showcasing traditional art, craft, and cuisine.</p>",
                "icon": "culture"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [78.0183, 27.1767]
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
                    <h3 className="name">Modern Flats and Appartments</h3>
                    <p className="location"><i className="fas fa-map-marker-alt"></i><span>Uttar Pradesh, India</span></p>
                    <div className="info">
                        <p><i className="fas fa-tag"></i><span>14 lac</span></p>
                        <p><i className="fas fa-user"></i><span>Devesh (owner)</span></p>
                        <p><i className="fas fa-phone"></i><a href="tel:1234567890">1234567890</a></p>
                        <p><i className="fas fa-building"></i><span>Flat</span></p>
                        <p><i className="fas fa-house"></i><span>Sale</span></p>
                        <p><i className="fas fa-calendar"></i><span>10-03-2023</span></p>
                    </div>
                    <h3 className="title">Details</h3>
                    <div className="flex">
                        <div className="box">
                            <p><i>Rooms :</i><span>2 BHK</span></p>
                            <p><i>Deposit amount :</i><span>0</span></p>
                            <p><i>Status :</i><span>Ready to move</span></p>
                            <p><i>Bedroom :</i><span>2</span></p>
                            <p><i>Bathroom :</i><span>2</span></p>
                            <p><i>Balcony :</i><span>1</span></p>
                        </div>
                        <div className="box">
                            <p><i>Carpet area :</i><span>800sqft</span></p>
                            <p><i>Sge :</i><span>3 years</span></p>
                            <p><i>Room floor :</i><span>3</span></p>
                            <p><i>Total floors :</i><span>22</span></p>
                            <p><i>Furnished :</i><span>Semi-furnished</span></p>
                            <p><i>Loan :</i><span>Available</span></p>
                        </div>
                    </div>
                    <h3 className="title">Amenities</h3>
                    <div className="flex">
                        <div className="box">
                            <p><i className="fas fa-check"></i><span>Lifts</span></p>
                            <p><i className="fas fa-check"></i><span>Security guards</span></p>
                            <p><i className="fas fa-times"></i><span>Play ground</span></p>
                            <p><i className="fas fa-check"></i><span>Gardens</span></p>
                            <p><i className="fas fa-check"></i><span>Water supply</span></p>
                            <p><i className="fas fa-check"></i><span>Power backup</span></p>
                        </div>
                        <div className="box">
                            <p><i className="fas fa-check"></i><span>Parking area</span></p>
                            <p><i className="fas fa-times"></i><span>Gym</span></p>
                            <p><i className="fas fa-check"></i><span>Shopping mall</span></p>
                            <p><i className="fas fa-check"></i><span>Hospital</span></p>
                            <p><i className="fas fa-check"></i><span>Schools</span></p>
                            <p><i className="fas fa-check"></i><span>Market area</span></p>
                        </div>
                    </div>
                    <h3 className="title">Description</h3>
                    <p className="description">It is a very budget friendly appartment you will get.</p>
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

export default View_property1
