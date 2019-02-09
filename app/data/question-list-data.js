import AnswerList from '../collections/answer-list';

const questionListData = [
  {
    name: '1',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿Qué describe la sigla OSI?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'International Organization for Standardization',
        value: 0
      },
      {
        description: 'Open System Interconnection',
        value: 1
      },
      {
        description: 'Open Selection Independet',
        value: 0
      },
      {
        description: 'System Organization international',
        value: 0
      }
    ])
  },
  {
    name: '2',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿En qué año nace el modelo OSI?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: '1975',
        value: 0
      },
      {
        description: '1980',
        value: 0
      },
      {
        description: '1977',
        value: 0
      },
      {
        description: '1984',
        value: 1
      }
    ])
  },
  {
    name: '3',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿Cuál es la causa de hacer un modelo OSI?',
    multiple: false,
    answersList: new AnswerList([
      {
        description:
          'Por la necesidad de interconectar sistemas de distintos fabricantes.',
        value: 1
      },
      {
        description: 'Disminución de costos en producción.',
        value: 0
      },
      {
        description: 'Facilitar protocolos y lenguajes.',
        value: 0
      },
      {
        description: 'Rivalidad en las marcas.',
        value: 0
      }
    ])
  },
  {
    name: '4',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿Qué es un proceso punto a punto?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Cada equipo tiene doble conectividad.',
        value: 0
      },
      {
        description: 'Cada pc puede actuar como cliente servidor.',
        value: 1
      },
      {
        description:
          'Intercambio de información entre dos capas del modelo OSI.',
        value: 0
      },
      {
        description: 'Transmisión de bits de datos.',
        value: 0
      }
    ])
  },
  {
    name: '5',
    image: 'https://placeimg.com/640/480/tech',
    description: 'Función de los 7 niveles del modelo OSI:',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'International Organization for Standardization',
        value: 0
      },
      {
        description: 'Unir las marcas de fabricantes.',
        value: 0
      },
      {
        description:
          'Definir el medio o medios físicos por los que va a viajar la comunicación.',
        value: 0
      },
      {
        description: 'Estructurar el protocolo de comunicación.',
        value: 1
      }
    ])
  },
  {
    name: '6',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿Cada nivel funciona de forma independiente?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Si, pero  no funciona si el anterior no arranca.',
        value: 1
      },
      {
        description: 'Si, no tiene un orden adecuado.',
        value: 0
      },
      {
        description: 'No, dependen de el superior y el inferior.',
        value: 0
      },
      {
        description: 'No, todos funcionan al tiempo.',
        value: 0
      }
    ])
  },
  {
    name: '7',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿Qué es el PDU?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Universidad Diego Portales ',
        value: 0
      },
      {
        description: 'Protocol Data Unit',
        value: 1
      },
      {
        description: 'Professional Development Unit',
        value: 0
      },
      {
        description: 'User Datagram Protocol ',
        value: 0
      }
    ])
  },
  {
    name: '8',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿Para qué sirve el PDU?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Determinar conexiones de red.',
        value: 0
      },
      {
        description: 'Pedir respuesta de datos.',
        value: 0
      },
      {
        description: 'Medir tiempo de entrega de datos.',
        value: 0
      },
      {
        description:
          'Intercambio de información entre dos capas del modelo OSI.',
        value: 1
      }
    ])
  },
  {
    name: '9',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿Cómo se llama la PDU de la capa de enlace de datos?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Paquete',
        value: 0
      },
      {
        description: 'Trama',
        value: 1
      },
      {
        description: 'Segmento',
        value: 0
      },
      {
        description: 'Bits',
        value: 0
      }
    ])
  },
  {
    name: '10',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿Cómo se llama la PDU de la capa de red?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Paquete',
        value: 1
      },
      {
        description: 'Trama',
        value: 0
      },
      {
        description: 'Segmento',
        value: 0
      },
      {
        description: 'Bits',
        value: 0
      }
    ])
  },
  {
    name: '11',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿Cómo se llama la PDU de la capa transporte?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Paquete',
        value: 0
      },
      {
        description: 'Trama',
        value: 0
      },
      {
        description: 'Segmento',
        value: 1
      },
      {
        description: 'Bits',
        value: 0
      }
    ])
  },
  {
    name: '12',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿Qué hace el nivel Física?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Permite que los usuarios accedan a la red.',
        value: 0
      },
      {
        description:
          'Administra las direcciones de datos y la transferencia entre redes.',
        value: 0
      },
      {
        description: 'Recibe la información del usuario.',
        value: 0
      },
      {
        description: 'Transmisión de datos por el medio.',
        value: 1
      }
    ])
  },
  {
    name: '13',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿De qué se encarga el nivel físico?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Recibe la información del usuario.',
        value: 0
      },
      {
        description: 'Transmisión de bits de datos.',
        value: 1
      },
      {
        description: 'Permite que los usuarios accedan a la red.',
        value: 0
      },
      {
        description:
          'Garantizar que tanto la computadora que transmite como la que recibe estén sincronizadas.',
        value: 0
      }
    ])
  },
  {
    name: '14',
    image: 'https://placeimg.com/640/480/tech',
    description: 'Una característica del nivel físico es:',
    multiple: false,
    answersList: new AnswerList([
      {
        description:
          'Definir el medio o medios físicos por los que va a viajar la comunicación.',
        value: 1
      },
      {
        description: 'DLS,Bluetooth,USB',
        value: 0
      },
      {
        description: 'UTP,coaxial, cable de red',
        value: 0
      },
      {
        description: 'Facilitar protocolos y lenguajes.',
        value: 0
      }
    ])
  },
  {
    name: '15',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿Protocolos del nivel físico son?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'TCP,UDP',
        value: 0
      },
      {
        description: 'DLS,Bluetooth,USB',
        value: 1
      },
      {
        description: 'LAN,WAN',
        value: 0
      },
      {
        description: 'ISO/IEC 7498-1',
        value: 0
      }
    ])
  },
  {
    name: '16',
    image: 'https://placeimg.com/640/480/tech',
    description: 'El nivel Físico específica...',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Específica cables y conectores.',
        value: 1
      },
      {
        description: 'Tipos de red.',
        value: 0
      },
      {
        description: 'Información de paquetes.',
        value: 0
      },
      {
        description: 'Cada pc puede actuar como cliente servidor.',
        value: 0
      }
    ])
  },
  {
    name: '17',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿Qué hace el nivel de enlace de datos?',
    multiple: false,
    answersList: new AnswerList([
      {
        description:
          'Administra las conexiones y terminaciones entre los sistemas que cooperan.',
        value: 0
      },
      {
        description: 'Transmisión de bits de datos.',
        value: 0
      },
      {
        description:
          'Administra las direcciones de datos y la transferencia entre redes.',
        value: 0
      },
      {
        description:
          'La capa de enlace de datos proporciona tránsito de datos confiable a través de un enlace físico.',
        value: 1
      }
    ])
  },
  {
    name: '18',
    image: 'https://placeimg.com/640/480/tech',
    description: 'Una función del nivel de enlace de datos:',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Permite que los usuarios accedan a la red.',
        value: 0
      },
      {
        description: 'Es uniforme a través de LANs y WANs.',
        value: 0
      },
      {
        description:
          'Estructura el flujo de bits bajo un formato predefinido llamado trama.',
        value: 1
      },
      {
        description:
          'Definir el medio o medios físicos por los que va a viajar la comunicación.',
        value: 0
      }
    ])
  },
  {
    name: '19',
    image: 'https://placeimg.com/640/480/tech',
    description: 'El nivel de Enlace de datos es responsable de...',
    multiple: false,
    answersList: new AnswerList([
      {
        description:
          'De la integridad de la recepción y envío de la información.',
        value: 1
      },
      {
        description: 'Protocolos de prueba. ',
        value: 0
      },
      {
        description: 'Conexión de red.',
        value: 0
      },
      {
        description: 'Descomponer las tramas.',
        value: 0
      }
    ])
  },
  {
    name: '20',
    image: 'https://placeimg.com/640/480/tech',
    description: 'Dentro de las funciones de enlace de datos esta:',
    multiple: false,
    answersList: new AnswerList([
      {
        description:
          'Notificar al emisor si algún paquete o trama está en mal estado.',
        value: 1
      },
      {
        description: 'Notificar al el estado de los datos.',
        value: 0
      },
      {
        description: 'Notificar al receptor el tamaño de los datos.',
        value: 0
      },
      {
        description: 'Descomponer las tramas.',
        value: 0
      }
    ])
  },
  {
    name: '21',
    image: 'https://placeimg.com/640/480/tech',
    description: 'EL nivel de enlace permite...',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Dividir las tramas en segmentos más pequeños.',
        value: 0
      },
      {
        description: 'Conocer el tiempo de respuesta de cada elemento enviado.',
        value: 0
      },
      {
        description: 'El nivel de la información.',
        value: 0
      },
      {
        description:
          'Garantizar que tanto la computadora que transmite como la que recibe estén sincronizadas.',
        value: 1
      }
    ])
  },
  {
    name: '22',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿Qué hace el nivel de red?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Es uniforme a través de LANs y WANs.',
        value: 0
      },
      {
        description:
          'Administra las direcciones de datos y la transferencia entre redes.',
        value: 1
      },
      {
        description: 'Transmisión de bits de datos.',
        value: 0
      },
      {
        description: 'Cada pc puede actuar como cliente servidor.',
        value: 0
      }
    ])
  },
  {
    name: '23',
    image: 'https://placeimg.com/640/480/tech',
    description: 'El nivel de red es responsable de:',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'El tipo de cable que se usa.',
        value: 0
      },
      {
        description: 'Los routers tengan acceso a la red.',
        value: 0
      },
      {
        description:
          'Direccionamiento de mensajes y de la conversión de las direcciones y nombres lógicos a físicos.',
        value: 1
      },
      {
        description: 'La conexión en cada equipo.',
        value: 0
      }
    ])
  },
  {
    name: '24',
    image: 'https://placeimg.com/640/480/tech',
    description: 'Por medio del nivel de red podemos identificar...',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'La integridad de la recepción y envío de la información.',
        value: 0
      },
      {
        description: 'El tipo de conexión que necesita.',
        value: 0
      },
      {
        description: 'El tamaño del mensaje.',
        value: 0
      },
      {
        description:
          'Determina la ruta del mensaje desde el emisor hasta el receptor dependiendo de la condición de la red.',
        value: 1
      }
    ])
  },
  {
    name: '25',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿El nivel de red permite reestructurar tramas?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Si reestructura tramas de datos grandes en más pequeños.',
        value: 1
      },
      {
        description: 'El nivel de la información.',
        value: 0
      },
      {
        description: 'Conexión de red.',
        value: 0
      },
      {
        description:
          'Administra las direcciones de datos y la transferencia entre redes.',
        value: 0
      }
    ])
  },
  {
    name: '26',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿La númeración de la red debe ser uniforme?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Según protocolos tcp/ip.',
        value: 0
      },
      {
        description: 'Es uniforme a través de LANs y WANs.',
        value: 1
      },
      {
        description: 'El tamaño del mensaje.',
        value: 0
      },
      {
        description: 'El tipo de conexión que necesita.',
        value: 0
      }
    ])
  },
  {
    name: '26',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿La numeración de la red debe ser uniforme?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Según protocolos TCP/IP.',
        value: 0
      },
      {
        description: 'Es uniforme a través de LANs y WANs.',
        value: 1
      },
      {
        description: 'El tamaño del mensaje.',
        value: 0
      },
      {
        description: 'El tipo de conexión que necesita.',
        value: 0
      }
    ])
  },
  {
    name: '27',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿Que hace el nivel de transporte?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Transporta datos de maquina origen a la de destino..',
        value: 1
      },
      {
        description: 'Transporta el estado de los datos.',
        value: 0
      },
      {
        description: 'Envía información al emisor.',
        value: 0
      },
      {
        description: 'Envía información al receptor.',
        value: 0
      }
    ])
  },
  {
    name: '28',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿El nivel de transporte garantiza que?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Pueda notificar al receptor el tamaño de los datos..',
        value: 0
      },
      {
        description: 'Tenga transmisión de bits de datos.',
        value: 0
      },
      {
        description: 'Que la conexión este en cada equipo.',
        value: 0
      },
      {
        description:
          'Que los mensajes lleguen a su destinatario sin errores, en la secuencia correcta y sin pérdidas de datos..',
        value: 1
      }
    ])
  },
  {
    name: '29',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ El nivel de transporte separa las capas de nivel de aplicación?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'No, está incluida en los niveles físicos.',
        value: 0
      },
      {
        description: 'Si, los niveles 5,6 y 7.',
        value: 1
      },
      {
        description: 'Si, los niveles 4, 5 y 7.',
        value: 0
      },
      {
        description: 'Si, los niveles 1,2 y 3.',
        value: 0
      }
    ])
  },
  {
    name: '30',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ El nivel de transporte separa las capas de nivel físico?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Si, los niveles 1,2 y 3.',
        value: 1
      },
      {
        description: 'Si, los niveles 4,5,6 y 7.',
        value: 0
      },
      {
        description: 'No, los niveles de enlace 6 y 7.',
        value: 0
      },
      {
        description: 'No, utiliza los niveles 1,2 y 7.',
        value: 0
      }
    ])
  },
  {
    name: '31',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Un protocolo orientado a la conexión es?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'LAN,WAN.',
        value: 0
      },
      {
        description: 'UDP.',
        value: 0
      },
      {
        description: 'PDU.',
        value: 0
      },
      {
        description: 'TCP.',
        value: 1
      }
    ])
  },
  {
    name: '32',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Un protocolo no orientado a la conexión es?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'PDU.',
        value: 0
      },
      {
        description: 'UDP.',
        value: 1
      },
      {
        description: 'LAN,WAN.',
        value: 0
      },
      {
        description: 'TCP.',
        value: 0
      }
    ])
  },
  {
    name: '33',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Que hace el nivel de sesión?',
    multiple: false,
    answersList: new AnswerList([
      {
        description:
          ' Administra las conexiones y terminaciones entre los sistemas que cooperan.',
        value: 1
      },
      {
        description: 'Transporta el estado de los datos.',
        value: 0
      },
      {
        description: 'Es uniforme a través de LANs y WANs.',
        value: 0
      },
      {
        description: 'Notificar al receptor el tamaño de los datos.',
        value: 0
      }
    ])
  },
  {
    name: '34',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Que hace el nivel de presentación?',
    multiple: false,
    answersList: new AnswerList([
      {
        description:
          ' Definir el medio o medios físicos por los que va a viajar la comunicación.',
        value: 0
      },
      {
        description:
          ' Garantiza que la información que envía la capa de aplicación de un sistema pueda ser leída por la capa de aplicación de otro..',
        value: 1
      },
      {
        description: 'Envía información al emisor.',
        value: 0
      },
      {
        description: 'Envía información al receptor.',
        value: 0
      }
    ])
  },
  {
    name: '35',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Que hace el nivel de aplicación?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'La conexión en cada equipo.',
        value: 0
      },
      {
        description:
          ' Conocer el tiempo de respuesta de cada elemento enviado.',
        value: 0
      },
      {
        description: 'Permite que los usuarios accedan a la red.',
        value: 1
      },
      {
        description: 'Permite la recuperación de  datos.',
        value: 0
      }
    ])
  },
  {
    name: '36',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ Cuál es la capa del modelo OSI que proporciona envió de datos, clase de servicio e informe de excepciones?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'presentación.',
        value: 0
      },
      {
        description: 'Enlace de Datos.',
        value: 0
      },
      {
        description: 'Red.',
        value: 0
      },
      {
        description: 'Sesión.',
        value: 1
      }
    ])
  },
  {
    name: '37',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ Cuál de las siguientes opciones describe mejor la función de la capa de presentación?',
    multiple: false,
    answersList: new AnswerList([
      {
        description:
          ' Es la responsable de la comunicación confiable de red entre nodos finales.',
        value: 0
      },
      {
        description:
          ' Se ocupa de las estructuras de datos y la sintaxis de datos de transferencia de datos de negociación.',
        value: 1
      },
      {
        description:
          ' Proporciona conectividad y selección de rutas entre dos sistemas finales.',
        value: 0
      },
      {
        description:
          ' Administra el intercambio de datos entre entidades de capas.',
        value: 0
      }
    ])
  },
  {
    name: '38',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ En este nivel de presentan problemas de cableado, conexiones, energía etc.?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Nivel Física.',
        value: 1
      },
      {
        description: 'Nivel de presentación.',
        value: 0
      },
      {
        description: 'Nivel de sesión.',
        value: 0
      },
      {
        description: 'Nivel de red.',
        value: 0
      }
    ])
  },
  {
    name: '39',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Estos dispositivos trabajan en el nivel de red?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Puentes y router.',
        value: 0
      },
      {
        description: 'Hub y Router.',
        value: 0
      },
      {
        description: 'Hub y Switch.',
        value: 0
      },
      {
        description: 'Router y switch administrables.',
        value: 1
      }
    ])
  },
  {
    name: '40',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ Seleccione en qué nivel puede estar un conflicto de direcciones IP?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Transporte.',
        value: 0
      },
      {
        description: 'Red.',
        value: 1
      },
      {
        description: 'Sesión.',
        value: 0
      },
      {
        description: 'Presentación.',
        value: 0
      }
    ])
  },
  {
    name: '41',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Selecciona el protocolo de enrutamiento de la capa de red?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'IP.',
        value: 0
      },
      {
        description: 'IPX.',
        value: 0
      },
      {
        description: 'APPLETALK.',
        value: 0
      },
      {
        description: 'BGP.',
        value: 1
      }
    ])
  },
  {
    name: '42',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ A qué nivel del modelo OSI pertenece CSMA/CD?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Nivel Física.',
        value: 1
      },
      {
        description: 'Nivel de presentación.',
        value: 0
      },
      {
        description: 'Nivel de sesión.',
        value: 0
      },
      {
        description: 'Nivel de red.',
        value: 0
      }
    ])
  },
  {
    name: '43',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ En el nivel de transporte los puertos lógicos junto con la capa red dan forma a los conocidos como?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Sockets de puerto.',
        value: 0
      },
      {
        description: 'Sockets IP: Puerto.',
        value: 1
      },
      {
        description: 'Sockets IP.',
        value: 0
      },
      {
        description: 'Ninguna de las anteriores.',
        value: 0
      }
    ])
  },
  {
    name: '44',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Protocolo de red no orientado a conexión?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Frame-Relay.',
        value: 0
      },
      {
        description: 'ATM.',
        value: 0
      },
      {
        description: 'IP.',
        value: 1
      },
      {
        description: 'TCP.',
        value: 0
      }
    ])
  },
  {
    name: '45',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Indica la respuesta FALSA sobre el nivel de sesión?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Es el quinto nivel del modelo OSI.',
        value: 0
      },
      {
        description:
          ' Sus capacidades se podrian incorporar en las aplicaciones del nivel 7.',
        value: 0
      },
      {
        description: 'El protocolo RCP no pertenece a este nivel.',
        value: 1
      },
      {
        description: 'Todas las anteriores.',
        value: 0
      }
    ])
  },
  {
    name: '46',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Indica la respuesta FALSA sobre el nivel de presentación?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Esta capa permite cifrar los datos.',
        value: 0
      },
      {
        description: 'Es el quinto nivel del modelo OSI.',
        value: 1
      },
      {
        description:
          ' Esta capa esla primera en trabajar mas el contenido de la comunicación.',
        value: 0
      },
      {
        description: 'Esta capa permite comprimir los datos.',
        value: 0
      }
    ])
  },
  {
    name: '47',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Que hardware situarías en la capa física del modelo OSI?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Todos.',
        value: 1
      },
      {
        description: 'Un repetidor.',
        value: 0
      },
      {
        description: 'Hub Ethernet.',
        value: 0
      },
      {
        description: 'Un Modem.',
        value: 0
      }
    ])
  },
  {
    name: '48',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ En la arquitectura OSI la detección de errores se lleva a cabo en el nivel?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Enlace.',
        value: 0
      },
      {
        description: 'Red.',
        value: 0
      },
      {
        description: 'Todos ellos.',
        value: 0
      },
      {
        description: 'Transporte.',
        value: 1
      }
    ])
  },
  {
    name: '49',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ El nivel encargado de establecer los puntos de sincronización para el diálogo entre terminales es?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Sesión.',
        value: 0
      },
      {
        description: 'Transporte.',
        value: 1
      },
      {
        description: 'Enlace.',
        value: 0
      },
      {
        description: 'Aplicación.',
        value: 0
      }
    ])
  },
  {
    name: '50',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Cuando se habla de par trenzado se habla de nivel?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Física.',
        value: 1
      },
      {
        description: 'Enlace.',
        value: 0
      },
      {
        description: 'Red.',
        value: 0
      },
      {
        description: 'Aplicación.',
        value: 0
      }
    ])
  },
  {
    name: '51',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ El nivel 6 corresponde a?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Red.',
        value: 0
      },
      {
        description: 'Transporte.',
        value: 0
      },
      {
        description: 'Física.',
        value: 0
      },
      {
        description: 'Presentación.',
        value: 1
      }
    ])
  },
  {
    name: '52',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ Cuál de las siguientes opciones describe mejor la función de la capa de presentación?',
    multiple: false,
    answersList: new AnswerList([
      {
        description:
          ' Se ocupa de las estructuras de datos y la sintaxis de datos de transferencia de datos de negociación.',
        value: 0
      },
      {
        description:
          ' Es la responsable de la comunicación confiable de red entre nodos finales.',
        value: 1
      },
      {
        description:
          ' Proporciona conectividad y selección de rutas entre dos sistemas finales.',
        value: 0
      },
      {
        description:
          ' Administra el intercambio de datos entre entidades de capas.',
        value: 0
      }
    ])
  },
  {
    name: '53',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ Cuál es la capa que establece, administra y finaliza las sesiones entre dos hosts que se están comunicando?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Red.',
        value: 0
      },
      {
        description: 'Sesión.',
        value: 1
      },
      {
        description: 'Enlace.',
        value: 0
      },
      {
        description: 'Física.',
        value: 0
      }
    ])
  },
  {
    name: '54',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Dispositivo que opera en la capa Enlace de datos?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Repetidor.',
        value: 0
      },
      {
        description: 'Hub.',
        value: 0
      },
      {
        description: 'Puente (Bridge).',
        value: 1
      },
      {
        description: 'Router.',
        value: 0
      }
    ])
  },
  {
    name: '55',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ Cuál de los siguientes protocolos usa UDO como protocolos subyacentes?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'TFTP.',
        value: 1
      },
      {
        description: 'SMTP.',
        value: 0
      },
      {
        description: 'FTP.',
        value: 0
      },
      {
        description: 'HTTP.',
        value: 0
      }
    ])
  },
  {
    name: '56',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ Establece, administra y finaliza las sesiones entre dos hosts que se están comunicando?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Nivel Sesion.',
        value: 1
      },
      {
        description: 'Nivel red.',
        value: 0
      },
      {
        description: 'Nivel de transporte.',
        value: 0
      },
      {
        description: 'Nivel de aplicación.',
        value: 0
      }
    ])
  },
  {
    name: '57',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ La capa de sesión surge como una forma de?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Esta capa permite cifrar los datos.',
        value: 0
      },
      {
        description: 'Esta capa permite comprimir los datos.',
        value: 0
      },
      {
        description: 'Organizar y sincronizar el diálogo.',
        value: 1
      },
      {
        description:
          ' Es la responsable de la comunicación confiable de red entre nodos finales.',
        value: 0
      }
    ])
  },
  {
    name: '58',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ Cuál es la capa del modelo OSI que proporciona conectividad y selección de rutas entre dos sistemas finales donde se produce el enrutamiento?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Nivel de presentacion.',
        value: 0
      },
      {
        description: 'Nivel de red.',
        value: 1
      },
      {
        description: 'Nivel de transporte.',
        value: 0
      },
      {
        description: 'Nivel fisica.',
        value: 0
      }
    ])
  },
  {
    name: '59',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ Cuál de las siguientes opciones describe mejor la función de la capa de presentación?',
    multiple: false,
    answersList: new AnswerList([
      {
        description:
          ' Es la responsable de la comunicación confiable de red entre nodos finales.',
        value: 0
      },
      {
        description:
          ' Es la que administra el intercambio de datos entre entidades de capas.',
        value: 0
      },
      {
        description:
          ' Es la que proporciona conectividad de selección de rutas entre 2 sistemas finales.',
        value: 0
      },
      {
        description:
          ' Es la que se ocupa de las estructuras de datos y la sintaxis de transferencia de datos de negociación.',
        value: 1
      }
    ])
  },
  {
    name: '60',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ Los procesos de comunicación son dividíos en capas ¿Cuantas son?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'El numero varia según la red.',
        value: 0
      },
      {
        description: '4 capas.',
        value: 0
      },
      {
        description: '7 capas.',
        value: 1
      },
      {
        description: '6 capas.',
        value: 0
      }
    ])
  },
  {
    name: '61',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Funciones de la capa de Sesión?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Comunicacion entre aplicaciones.',
        value: 0
      },
      {
        description: 'Se puede comparar con diálogos y conversaciones.',
        value: 1
      },
      {
        description: 'Ninguna de las anteriores.',
        value: 0
      },
      {
        description:
          ' Refuerza la velocidad de carga de una paquete de datos en transito.',
        value: 0
      }
    ])
  },
  {
    name: '62',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Ejemplos de la capa de aplicación?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Navegadores de Web.',
        value: 1
      },
      {
        description: 'Routers.',
        value: 0
      },
      {
        description: 'Red Lan.',
        value: 0
      },
      {
        description: 'Todas las anteriores.',
        value: 0
      }
    ])
  },
  {
    name: '63',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ Cuál es la capa del Modelo OSI que proporciona envío de datos, clase de servicio e informe de excepciones?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Red.',
        value: 0
      },
      {
        description: 'Transporte.',
        value: 0
      },
      {
        description: 'Sesión.',
        value: 1
      },
      {
        description: 'Presentación.',
        value: 0
      }
    ])
  },
  {
    name: '64',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Cual es una de las ventajas del modelo OSI?',
    multiple: false,
    answersList: new AnswerList([
      {
        description:
          ' Permite que el mercado sea mas amplio en software y hardware.',
        value: 0
      },
      {
        description: 'No tiene ventajas.',
        value: 0
      },
      {
        description: 'Permite que los datos no se pierdan.',
        value: 0
      },
      {
        description:
          ' Permite a los distintos tipos de Hardware y software de red comunicarse entre si.',
        value: 1
      }
    ])
  },
  {
    name: '65',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Las siglas LAN significan?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Local Área Network.',
        value: 1
      },
      {
        description: 'Local Area Net.',
        value: 0
      },
      {
        description: 'Logal Area Network.',
        value: 0
      },
      {
        description: 'Localized Area Network.',
        value: 0
      }
    ])
  },
  {
    name: '66',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Qué es una red LAN?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Es una red que supera el área metropolitana.',
        value: 0
      },
      {
        description: 'Es la utilizada en un barrio.',
        value: 0
      },
      {
        description:
          ' Es una red de computadoras que abarca un área reducida a una casa, o un edificio.',
        value: 1
      },
      {
        description: 'Es lo mismo que una Man.',
        value: 0
      }
    ])
  },
  {
    name: '67',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Un Router en el modelo OSI?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Actúa en la capa 3.',
        value: 1
      },
      {
        description: 'Actúa en la capa 2.',
        value: 0
      },
      {
        description: 'No influye en el funcionamiento de la red.',
        value: 0
      },
      {
        description: 'No actúa en ninguna capa.',
        value: 0
      }
    ])
  },
  {
    name: '68',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ En qué capa OSI ubicamos los cables UTP?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Red.',
        value: 0
      },
      {
        description: 'Física.',
        value: 1
      },
      {
        description: 'Aplicación.',
        value: 0
      },
      {
        description: 'Presentación.',
        value: 0
      }
    ])
  },
  {
    name: '69',
    image: 'https://placeimg.com/640/480/tech',
    description: '¿ Qué es un HUB?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Un encaminador.',
        value: 0
      },
      {
        description: 'Un conmutador.',
        value: 0
      },
      {
        description: 'Un concentrador.',
        value: 1
      },
      {
        description: 'Ninguna de las anteriores.',
        value: 0
      }
    ])
  },
  {
    name: '70',
    image: 'https://placeimg.com/640/480/tech',
    description:
      '¿ En cuales dos subcapas se divide la capa de enlace del modelo OSI?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'HDLC y LLC.',
        value: 0
      },
      {
        description: 'MAC y HDLC.',
        value: 0
      },
      {
        description: 'LLC y MAC.',
        value: 1
      },
      {
        description: 'MAC y PPP.',
        value: 0
      }
    ])
  }
];

export default questionListData;
