import React from 'react'
import CIcon from '@coreui/icons-react'

const user = JSON.parse(sessionStorage.getItem("userData"));
const role = user.role;
var lmao = [
  { name: 'Dashboard',
    _tag: 'CSidebarNavItem',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  { _children: ['Menu'],
    _tag: 'CSidebarNavTitle',
  },
  { name: 'Products',
    _tag: 'CSidebarNavItem',
    to: '/produk',
    icon: 'cil-video',
  },
  { name: 'Penawaran',
  _tag: 'CSidebarNavDropdown',
  // route: '/buttons',
  icon: 'cil-paper-plane',
  _children: [
    { name: 'Daftar Penawaran',
      _tag: 'CSidebarNavItem',
      to: '/penawaran',
    },
    { name: 'Persetujuan',
      _tag: 'CSidebarNavItem',
      to: '/penawaran/status',
    }],
  },
  { name: 'Pembelian',
    _tag: 'CSidebarNavDropdown',
    // to: '/pembelian',
    icon: 'cil-money',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Daftar Pembelian',
        to: '/pembelian',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Pendaftaran Pembelian',
        to: '/pembelian/daftar',
      },
    ],
  },
  { name: 'Serial Number',
  _tag: 'CSidebarNavItem',
  to: '/serials',
  icon: 'cil-search',
  },
  // { name: 'Pelanggan',
  //   _tag: 'CSidebarNavItem',
  //   to: '/pelanggan',
  //   icon: 'cil-group',
  // }
]

if (role === "super"){
    lmao.push(
      { _children: ['User'],
        _tag: 'CSidebarNavTitle',
      },
      { name: 'Users',
        _tag: 'CSidebarNavItem',
        to: '/pengguna',
        icon: 'cil-address-book',
      }
    )
}

export default lmao;

