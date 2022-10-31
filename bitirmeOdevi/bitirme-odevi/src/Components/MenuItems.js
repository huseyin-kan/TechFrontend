import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MenuItems extends Component {
  render() {
    return (
      <div>
        <ul className=''>
                    <li><Link>Laptop</Link></li>
                    <li><Link>Televizyon</Link></li>
                    <li><Link>Kulaklık</Link></li>
                    <li><Link>Çevre Birimleri</Link></li>
                    <li><Link>Telefon</Link></li>
                    <li><Link>Konsol</Link></li>
                </ul>
      </div>
    )
  }
}

