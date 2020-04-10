import React, { useState } from 'react'
import { Link } from 'gatsby'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'
import chevron from '../img/chevron.svg'

import './Map.scss'

const MapWrapper = ({ map }) => {
  const [showOverlay, setShowOverlay] = useState(false)

  if (!map || !map.location) return ;

  const { location, title, link, newTab } = map;

  const coordinates = JSON.parse(location).coordinates
  coordinates.reverse()

  const getMapProvider = (x,y,z,dpr) =>
    `https://api.maptiler.com/maps/streets/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${process.env.GATSBY_MAPTILER_ACCESS_TOKEN}`

  const overlayOffset = [120, 80]

  const innerOverlay = (
    <div className="map-overlay__link">
      {title}
      <img className="map-overlay__link__chevron" src={chevron} alt="link" />
    </div>
  );

  return (
    <Map provider={getMapProvider} center={coordinates} zoom={15}>
      <Marker anchor={coordinates} payload={1} onClick={() => setShowOverlay(!showOverlay)} />

      {
        showOverlay && (
          <Overlay anchor={coordinates} offset={overlayOffset}>
            <div className="map-overlay" style={{ width: overlayOffset[0]*2, maxHeight: overlayOffset[1] }}>
              {
                newTab ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {innerOverlay}
                  </a>
                ) : (
                  <Link to={link}>
                    {innerOverlay}
                  </Link>
                )
              }
            </div>
          </Overlay>
        )
      }
    </Map>
  );
}

export default MapWrapper;