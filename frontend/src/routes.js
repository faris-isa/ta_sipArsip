import React from 'react';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const AddUser = React.lazy(() => import('./views/users/AddUser'));
const EditUser = React.lazy(() => import('./views/users/EditUser'));

//products
const Products = React.lazy(() => import('./views/products/Products'));
const Product = React.lazy(() => import('./views/products/Product'));
const AddProduct = React.lazy(() => import('./views/products/AddProduct'));
const EditProduct = React.lazy(() => import('./views/products/EditProduct'));

//offers
const Offers = React.lazy(() => import('./views/offers/Offers'));
const Offer = React.lazy(() => import('./views/offers/Offer'));
const AddOffers = React.lazy(() => import('./views/offers/AddOffers'));
const StatusOffers = React.lazy(() => import('./views/offers/OffersAcc'));

//purchases
const Purchases = React.lazy(() => import('./views/purchases/Purchases'));
const Purchase = React.lazy(() => import('./views/purchases/Purchase'));
const ListRegPurchases = React.lazy(() => import('./views/purchases/ListRegPurchases'));
const RegPurchase = React.lazy(() => import('./views/purchases/RegPurchase'));

// const Customers = React.lazy(() => import('./views/customers/Customers'));
const Serials = React.lazy(() => import('./views/serials/'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  //pengguna
  { path: '/pengguna', exact: true,  name: 'Users', component: Users },
  { path: '/pengguna/show/:id', exact: true, name: 'User Details', component: User },
  { path: '/pengguna/tambah', name: 'Tambah', component: AddUser },
  { path: '/pengguna/edit/:id', name: 'Ubah', component: EditUser },

  //produk
  { path: '/produk', exact: true, name: 'Produk', component: Products },
  { path: '/produk/show/:id', exact:true, name: 'Product Details', component: Product },
  { path: '/produk/edit/:id', name: 'Ubah', component: EditProduct },
  { path: '/produk/tambah', name: 'Tambah', component: AddProduct},

  //penawaran
  { path: '/penawaran', exact: true, name: 'Penawaran', component: Offers},
  { path: '/penawaran/show/:id', exact: true, name: 'Detail Penawaran', component: Offer},
  { path: '/penawaran/tambah', name: 'Tambah', component: AddOffers},
  { path: '/penawaran/status', name: 'Status', component: StatusOffers},

  //pembelian
  { path: '/pembelian/', exact: true, name: 'Pembelian', component: Purchases},
  { path: '/pembelian/show/:id', exact: true, name: 'Detail', component: Purchase},
  { path: '/pembelian/daftar', exact: true, name: 'Daftar', component: ListRegPurchases},
  { path: '/pembelian/daftar/:id', name: 'Tambah', component: RegPurchase},

  //pelanggan
  // { path: '/pelanggan', exact: true, name: 'Pelanggan', component: Customers},

  //serials
  { path: '/serials', exact: true, name: 'Serial Number', component: Serials},

];

export default routes;
