// Lista de ubicaciones de las dulcerías organizadas por secciones
const tiendasList = [
    {
      id: 1,
      name: "Santiago Centro",
      tiendas: [
        { direccion: "SALV. SANFUENTES 2902", telefono: "232240707" },
        { direccion: "SAN ALFONSO 84", telefono: "232240708" },
        { direccion: "FRANKLIN 801", telefono: "232240714" },
        { direccion: "SAN PABLO 3069", telefono: "232240714" },
        { direccion: "SAN FRANCISCO 2057", telefono: "232240714" },
      ],
    },
    {
      id: 2,
      name: "Recoleta",
      tiendas: [
        { direccion: "AV. LA PAZ 195 - 199", telefono: "232240711" },
        { direccion: "AV. LA PAZ 177", telefono: "232240715" },
        { direccion: "A. LOPEZ DE BELLO 720", telefono: "232240716" },
        { direccion: "A. LOPEZ DE BELLO 622", telefono: "232240718" },
        { direccion: "SALAS 294-298", telefono: "232240737" },
      ],
    },
    {
      id: 3,
      name: "San Ramón",
      tiendas: [
        { direccion: "AV. SANTA ROSA 7949 - 7953", telefono: "232240701" },
        { direccion: "AV. SANTA ROSA 8699", telefono: "232240702" },
      ],
    },
    {
      id: 4,
      name: "Maipú",
      tiendas: [
        { direccion: "AV. 5 DE ABRIL 236", telefono: "232240709" },
        { direccion: "AV. 5 DE ABRIL 244", telefono: "232240754" },
      ],
    },
    {
      id: 5,
      name: "Cerro Navia",
      tiendas: [
        { direccion: "JOSE JOAQUIN PEREZ 7431", telefono: "232240740" },
        { direccion: "JOSE JOAQUIN PEREZ 7433", telefono: "232240710" },
      ],
    },
    {
      id: 6,
      name: "La Florida",
      tiendas: [
        { direccion: "AV.VIC. MACKENNA PNTE. 7323", telefono: "232240703" },
      ],
    },
    {
      id: 7,
      name: "San Bernardo",
      tiendas: [
        { direccion: "AV. FREIRE 685", telefono: "232240706" },
        { direccion: "AV. FREIRE 685 - B", telefono: "232240719" },
      ],
    },
    {
      id: 8,
      name: "Puente Alto",
      tiendas: [
        { direccion: "TOCORNAL 95 A", telefono: "232240739" },
        { direccion: "TOCORNAL 95 B", telefono: "232240704" },
        { direccion: "TOCORNAL 95 HELADOS", telefono: "232240705" },
      ],
    },
    {
      id: 9,
      name: "Melipilla",
      tiendas: [
        { direccion: "AV. MANSO 670", telefono: "232240721" },
      ],
    },
    {
      id: 10,
      name: "Iquique",
      tiendas: [
        { direccion: "AV. PROGRESO N° 2146", telefono: "232240744" },
      ],
    },
    {
      id: 11,
      name: "Antofagasta",
      tiendas: [
        { direccion: "MAIPU 645", telefono: "232240743" },
      ],
    },
    {
      id: 12,
      name: "Copiapó",
      tiendas: [
        { direccion: "MAIPU 672 - B", telefono: "232240742" },
      ],
    },
    {
      id: 13,
      name: "La Serena",
      tiendas: [
        { direccion: "VICENTE ZORRILLA 869", telefono: "232240755" },
      ],
    },
    {
      id: 14,
      name: "Coquimbo",
      tiendas: [
        { direccion: "ALDUNATE N° 1685", telefono: "232240741" },
      ],
    },
    {
      id: 15,
      name: "Ovalle",
      tiendas: [
        { direccion: "Aristia Oriente 108", telefono: "232240741" },
      ],
    },
    {
      id: 16,
      name: "Valparaíso",
      tiendas: [
        { direccion: "AV. YUNGAY 2803", telefono: "232240756" },
        { direccion: "AV. YUNGAY 2815", telefono: "232240757" },
        { direccion: "AV. YUNGAY 2766 - 2776", telefono: "232240758" },
      ],
    },
    {
      id: 17,
      name: "San Antonio",
      tiendas: [
        { direccion: "AV. PEDRO MONTT 181", telefono: "232240722" },
      ],
    },
    {
      id: 18,
      name: "Rancagua",
      tiendas: [
        { direccion: "DR. SALINAS 1138", telefono: "232240723" },
      ],
    },
    {
      id: 19,
      name: "San Fernando",
      tiendas: [
        { direccion: "RANCAGUA 801", telefono: "232240724" },
      ],
    },
    {
      id: 20,
      name: "Curicó",
      tiendas: [
        { direccion: "O ́HIGGINS 820", telefono: "232240725" },
      ],
    },
    {
      id: 21,
      name: "Talca",
      tiendas: [
        { direccion: "3 NORTE 1749 - 1753", telefono: "232240726" },
      ],
    },
    {
      id: 22,
      name: "Chillán",
      tiendas: [
        { direccion: "ISABEL RIQUELME 930", telefono: "232240727" },
      ],
    },
    {
      id: 23,
      name: "Concepción",
      tiendas: [
        { direccion: "LOS CARRERAS 524", telefono: "232240728" },
        { direccion: "AV. 21 DE MAYO 3225 L-334", telefono: "232240749" },
        { direccion: "LOS CARRERAS 510", telefono: "232240759" },
        { direccion: "LOS CARRERAS 528", telefono: "232240761" },
        { direccion: "LOS CARRERAS 546", telefono: "61232240761" },
      ],
    },
    {
      id: 24,
      name: "Talcahuano",
      tiendas: [
        { direccion: "VALDIVIA 173-177", telefono: "232240738" },
      ],
    },
    {
      id: 25,
      name: "Lota",
      tiendas: [
        { direccion: "COUSIÑO 582", telefono: "232240729" },
      ],
    },
    {
      id: 26,
      name: "Coronel",
      tiendas: [
        { direccion: "Remigio Castro 151", telefono: "" }, // No se proporcionó el teléfono
      ],
    },
    {
      id: 27,
      name: "Los Ángeles",
      tiendas: [
        { direccion: "VILLAGRAN 626", telefono: "232240731" },
        { direccion: "VILLAGRAN 640", telefono: "61232240731" },
      ],
    },
    {
      id: 28,
      name: "Temuco",
      tiendas: [
        { direccion: "AV. PINTO 102", telefono: "232240732" },
        { direccion: "AV. MIRAFLORES 1285 - 1291", telefono: "232240733" },
        { direccion: "AV. MIRAFLORES 1456", telefono: "232240747" },
      ],
    },
    {
      id: 29,
      name: "Valdivia",
      tiendas: [
        { direccion: "AV. PICARTE 763", telefono: "232240734" },
      ],
    },
    {
      id: 30,
      name: "Osorno",
      tiendas: [
        { direccion: "ERRAZURIZ 1281 - 1285", telefono: "232240735" },
      ],
    },
    {
      id: 31,
      name: "Puerto Montt",
      tiendas: [
        { direccion: "AV. DIEGO PORTALES 1950 - A", telefono: "232240736" },
      ],
    },
  ];
 
export default tiendasList; // Exporta la lista
