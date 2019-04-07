import { IHotel } from '../../models';

export const hotels: IHotel[] = [
  {
    id: 0,
    title: 'Universal Cabana',
    address: 'Orlando',
    description: `Redefine family time with a stay in one of these affordable suites. From the two 40”
    TVs to the convenient kitchenette to the brilliant bathroom area – designed to let three people get
     ready at once – they
    give everyone more room to relax.`,
    phone: '+3242353434',
    picture: 'assets/images/universal_cabana_common.jpg',
    photos: [
      'assets/images/universal_cabana_beach.jpg',
      'assets/images/universal_cabana_room.jpg'
    ],
    weather:  {
      temperature: 12,
      wind: 11,
      icon: 'sun'
    },
    profile: {
      followers: 112,
      following: 11,
      photo: 'assets/images/universal_cabana_profile.jpg'
    },
    stars: 3
  },
  {
    id: 1,
    title: 'Barut Resort',
    address: 'Kemer',
    description: `This hotel fits in nicely between mountains and the Med. The thin strip of private beach comes with
     loungers and its very own pier. If you want shops, bars and restaurants, Kemer’s centre is about 10 minutes’ walk
      away.`,
    phone: '+3242353434',
    picture: 'assets/images/barut_kemer_common.jpg',
    photos: [
      'assets/images/barut_kemer_beach.jpg',
      'assets/images/barut_kemer_room.jpg'
    ],
    weather:  {
      temperature: 5,
      wind: 4,
      icon: 'rain'
    },
    profile: {
      followers: 12,
      following: 111,
      photo: 'assets/images/barut_kemer_profile.jpg'
    },
    stars: 4
  },
  {
    id: 2,
    title: 'Limak Limra Resort',
    address: 'Kemer',
    description: `With a backdrop of the Taurus Mountains and located on extensive land, the marvellous hotel
     is beautifully situated directly on the beach of Kiriş, about 5 km away from the popular holiday resort of
      Kemer with its numerous shopping possibilities.`,
    phone: '+3242353434',
    picture: 'assets/images/limak_limbra_common.jpg',
    photos: [
      'assets/images/limak_limbra_beach.jpg',
      'assets/images/limak_limbra_room.jpg'
    ],
    weather:  {
      temperature: -2,
      wind: 2,
      icon: 'cloud'
    },
    profile: {
      followers: 45,
      following: 78,
      photo: 'assets/images/limak_limbra_profile.jpg'
    },
    stars: 5
  }
];
