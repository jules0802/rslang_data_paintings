const paintings1 = [
  {
    "id": "1_01",
    "name": "Stag Hunt",
    "level1rc": "level1/deerhunt.jpg",
    "cutSrc": "level1/cut/",
    "author": "Niccolò dell'",
    "year": "1550-52"
  },
  {
    "id": "1_02",
    "name": "Deer beside a Lake",
    "level1rc": "level1/deerlake.jpg",
    "cutSrc": "level1/cut/",
    "author": "Carl Frederik",
    "year": "1888"
  },
  {
    "id": "1_03",
    "name": "Country Road with Cypresses",
    "level1rc": "level1/abbati2.jpg",
    "cutSrc": "level1/cut/",
    "author": "ABBATI, Giuseppe",
    "year": "1860"
  },
  {
    "id": "1_04",
    "name": "Fireworks in Naples",
    "level1rc": "level1/firework.jpg",
    "cutSrc": "level1/cut/",
    "author": "ACHENBACH, Oswald",
    "year": "1875"
  },
  {
    "id": "1_05",
    "name": "The Ninth Wave",
    "level1rc": "level1/9th_wave.jpg",
    "cutSrc": "level1/cut/",
    "author": "AIVAZOVSKY, Ivan Konstantinovich",
    "year": "1850"
  },
  {
    "id": "1_06",
    "name": "View of Campo Santi Giovanni e Paolo",
    "level1rc": "level1/campo.jpg",
    "cutSrc": "level1/cut/",
    "author": "ALBOTTO, Francesco",
    "year": "1745"
  },
  {
    "id": "1_07",
    "name": "San Giuseppe di Castello",
    "level1rc": "level1/giuseppe.jpg",
    "cutSrc": "level1/cut/",
    "author": "ALBOTTO, Francesco",
    "year": "1745"
  },
  {
    "id": "1_08",
    "name": "View of St.Petersburg",
    "level1rc": "level1/view_stp.jpg",
    "cutSrc": "level1/cut/",
    "author": "ALEKSEYEV, Fyodor Yakovlevich",
    "year": "1795"
  },
  {
    "id": "1_09",
    "name": "Landscape with the Finding of Moses",
    "level1rc": "level1/landmose.jpg",
    "cutSrc": "level1/cut/",
    "author": "ALLEGRAIN, Etienne",
    "year": "second half of XVII century"
  },
  {
    "id": "1_10",
    "name": "River Landscape",
    "level1rc": "level1/riverla2.jpg",
    "cutSrc": "level1/cut/",
    "author": "ALLEGRAIN, Etienne",
    "year": "second half of XVII century"
  },
  {
    "id": "1_11",
    "name": "Extensive Wooded Landscape with Cephalus and Procris",
    "level1rc": "level1/extensiv.jpg",
    "cutSrc": "level1/cut/",
    "author": "ALSLOOT, Denis van",
    "year": "first half of XVII century"
  },
  {
    "id": "1_12",
    "name": "Skating during Carnival",
    "level1rc": "level1/skating.jpg",
    "cutSrc": "level1/cut/",
    "author": "ALSLOOT, Denis van",
    "year": "1620"
  },
  {
    "id": "1_13",
    "name": "Winter Landscape",
    "level1rc": "level1/winter_l.jpg",
    "cutSrc": "level1/cut/",
    "author": "ALSLOOT, Denis van",
    "year": "1610"
  },
  {
    "id": "1_14",
    "name": "Winter Landscape in the Fôret de Soignes, with the Flight Into Egypt",
    "level1rc": "level1/winterla.jpg",
    "cutSrc": "level1/cut/",
    "author": "ALSLOOT, Denis van",
    "year": "1616"
  },
  {
    "id": "1_15",
    "name": "View of Vienna from the Prater",
    "level1rc": "level1/viewvien.jpg",
    "cutSrc": "level1/cut/",
    "author": "ALT, Rudolf von",
    "year": "1834"
  },
  {
    "id": "1_16",
    "name": "An English 3rd - Rate Ship of the Line in Three Positions",
    "level1rc": "level1/rateship.jpg",
    "cutSrc": "level1/cut/",
    "author": "ANDERSON, William",
    "year": "first half of XIX century"
  },
  {
    "id": "1_17",
    "name": "Shipping in a Calm Sea off the Coast",
    "level1rc": "level1/shipcalm.jpg",
    "cutSrc": "level1/cut/",
    "author": "ANDERSON, William",
    "year": "1803"
  },
  {
    "id": "1_18",
    "name": "Shipping on the Thames off Deptford",
    "level1rc": "level1/shipping.jpg",
    "cutSrc": "level1/cut/",
    "author": "ANDERSON, William",
    "year": "1825"
  },
  {
    "id": "1_19",
    "name": "Italianate Coastal Landscape",
    "level1rc": "level1/landsca3.jpg",
    "cutSrc": "level1/cut/",
    "author": "ANESI, Paolo",
    "year": "XVIII century"
  },
  {
    "id": "1_20",
    "name": "Tiber Bridge in Rome",
    "level1rc": "level1/rome.jpg",
    "cutSrc": "level1/cut/",
    "author": "ANESI, Paolo",
    "year": "XVIII century"
  },
  {
    "id": "1_21",
    "name": "View of the Roman Campagna",
    "level1rc": "level1/rome1.jpg",
    "cutSrc": "level1/cut/",
    "author": "ANESI, Paolo",
    "year": "XVIII century"
  },
  {
    "id": "1_22",
    "name": "Harbour Scene",
    "level1rc": "level1/scene.jpg",
    "cutSrc": "level1/cut/",
    "author": "ANESI, Paolo",
    "year": "XVIII century"
  },
  {
    "id": "1_23",
    "name": "View of Tivoli and the Roman Campagna",
    "level1rc": "level1/tivoli.jpg",
    "cutSrc": "level1/cut/",
    "author": "ANESI, Paolo",
    "year": "XVIII century"
  },
  {
    "id": "1_24",
    "name": "The Western Railway Leaving Paris",
    "level1rc": "level1/railway.jpg",
    "cutSrc": "level1/cut/",
    "author": "ANGRAND, Charles",
    "year": "1886"
  },
  {
    "id": "1_25",
    "name": "Landscape with a Musician",
    "level1rc": "level1/landscap.jpg",
    "cutSrc": "level1/cut/",
    "author": "APSHOVEN, Thomas van",
    "year": "XVII century"
  },
  {
    "id": "1_26",
    "name": "Edge of a Wood",
    "level1rc": "level1/edgewood.jpg",
    "cutSrc": "level1/cut/",
    "author": "ARTHOIS, Jacques d'",
    "year": "XVII century"
  },
  {
    "id": "1_27",
    "name": "An Extensive Wooded Landscape with Travellers on a Path",
    "level1rc": "level1/extensiv_1.jpg",
    "cutSrc": "level1/cut/",
    "author": "ARTHOIS, Jacques d'",
    "year": "XVII century"
  },
  {
    "id": "1_28",
    "name": "Wooded Landscape",
    "level1rc": "level1/landscap_1.jpg",
    "cutSrc": "level1/cut/",
    "author": "ARTHOIS, Jacques d'",
    "year": "XVII century"
  },
  {
    "id": "1_29",
    "name": "Wooded Landscape",
    "level1rc": "level1/woodedla.jpg",
    "cutSrc": "level1/cut/",
    "author": "ARTHOIS, Jacques d'",
    "year": "XVII century"
  },
  {
    "id": "1_30",
    "name": "The Delft City Wall with the Houttuinen",
    "level1rc": "level1/citywall.jpg",
    "cutSrc": "level1/cut/",
    "author": "ASCH, Pieter Jansz.van",
    "year": "1650"
  },
  {
    "id": "1_31",
    "name": "River Landscape",
    "level1rc": "level1/river_la.jpg",
    "cutSrc": "level1/cut/",
    "author": "ASCH, Pieter Jansz. van",
    "year": "1640"
  },
  {
    "id": "1_32",
    "name": "View of Killarney",
    "level1rc": "level1/kilarney.jpg",
    "cutSrc": "level1/cut/",
    "author": "ASHFORD, William",
    "year": "1778"
  },
  {
    "id": "1_33",
    "name": "Landscape with Waterfall and Farm",
    "level1rc": "level1/waterfal.jpg",
    "cutSrc": "level1/cut/",
    "author": "ASSCHE, Henri van",
    "year": "1806"
  },
   {
    "id": "1_34",
    "name": "Winter Landscape",
     "level1rc": "level1/winterla_1.jpg",
     "cutSrc": "level1/cut/",
    "author": "ASSCHE, Henri van",
    "year": "1814"
  },
  {
    "id": "1_35",
    "name": "Coastal Scene with Resting Riders",
    "level1rc": "level1/coastal.jpg",
    "cutSrc": "level1/cut/",
    "author": "ASSELYN, Jan",
    "year": "1652"
  },
   {
    "id": "1_36",
    "name": "Italianate Landscape with a River and an Arched Bridge",
     "level1rc": "level1/italiana.jpg",
     "cutSrc": "level1/cut/",
    "author": "ASSELYN, Jan",
    "year": "1648"
  },
  {
    "id": "1_37",
    "name": "Italianate Landscape with Peasants and Animals Fording a River",
    "level1rc": "level1/italianb.jpg",
    "cutSrc": "level1/cut/",
    "author": "ASSELYN, Jan",
    "year": "1640-45"
  },
  {
    "id": "1_38",
    "name": "Landscape with Frozen River",
    "level1rc": "level1/landscap_2.jpg",
    "cutSrc": "level1/cut/",
    "author": "AVERCAMP, Barend",
    "year": "1655"
  },
  {
    "id": "1_39",
    "name": "Ice Landscape",
    "level1rc": "level1/ice_land.jpg",
    "cutSrc": "level1/cut/",
    "author": "AVERCAMP, Hendrick",
    "year": "XVII century"
  },
  {
    "id": "1_40",
    "name": "Arabs on Horseback",
    "level1rc": "level1/arabs.jpg",
    "cutSrc": "level1/cut/",
    "author": "AZEGLIO, Massimo Taparelli, Marquis d'",
    "year": "1840"
  },
  {
    "id": "1_41",
    "name": "Ships in Distress off a Rocky Coast",
    "level1rc": "level1/distress.jpg",
    "cutSrc": "level1/cut/",
    "author": "BACKHUYSEN, Ludolf",
    "year": "1667"
  },
  {
    "id": "1_42",
    "name": "A Fishing Pink",
    "level1rc": "level1/fishing.jpg",
    "cutSrc": "level1/cut/",
    "author": "BACKHUYSEN, Ludolf",
    "year": "1680"
  },
  {
    "id": "1_43",
    "name": "Shipping by the Dutch Coast",
    "level1rc": "level1/shipping_1.jpg",
    "cutSrc": "level1/cut/",
    "author": "BACKHUYSEN, Ludolf",
    "year": "XVII century"
  },
  {
    "id": "1_44",
    "name": "View from the Nieuwe Maas River towards the City of Vlaardingen",
    "level1rc": "level1/viewvlaa.jpg",
    "cutSrc": "level1/cut/",
    "author": "BACKHUYSEN, Ludolf",
    "year": "1680s"
  },
  {
    "id": "1_45",
    "name": "Dutch Vessels off a Coastline on a Breezy Day",
    "level1rc": "level1/vessels1.jpg",
    "cutSrc": "level1/cut/",
    "author": "BACKHUYSEN, Ludolf",
    "year": "1680"
  },
] 

export default paintings1;