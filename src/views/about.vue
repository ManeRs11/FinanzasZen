<template>
  <div class="about">

    <div class="container">

      <div class="animated fadeInDown">
        <h3> <strong>¿QUE ES FINANZAS ZEN?</strong></h3>
        <hr>
      </div>

      <div style="text-align: justify;">
        <b-row style="padding-top:23px; padding-bottom:23px">
            <b-col class="animated fadeInLeft">
              <div class="acordeon">

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 variant="info"> <strong>¿Qué es Finanzas Zen?</strong> </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text> <strong>Un servicio de cursos presenciales y en línea con información sobre temas prácticos 
                        que mejoran tu relación con el dinero.</strong> 
                      </b-card-text>
                      <b-card-text> <strong>La información que es presentada en los seminarios está basada en la experiencia personal y 
                        profesional de <code>Alan Macías Pacheco</code>.</strong></b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2 variant="info"> <strong>¿Quién imparte los seminarios de Finanzas Zen?</strong> </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text> <strong>Éste proyecto es impartido y compartido por <code>Alan Macías Pacheco</code>.</strong> </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3 variant="info"> <strong>¿Cómo es Finanzas Zen?</strong> </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <strong>
                          Técnicamente.- Uso modelos pedagógicos constructivista, cognitivo, así como recursos visuales, escritos, 
                          dinámicos, reflexivos a partir de la ayuda mutua y de PNL. <br><br>
                          Cuenta con material escrito, visual a través de expositor y llamadas en línea 1 vez por semana durante 4 
                          semanas.
                        </strong>
                      </b-card-text>

                      <b-card-text> <strong><code>¿O sea?</code></strong></b-card-text>

                      <b-card-text>
                        <strong>
                          Alan realiza exposiciones con una presentación ordenada en la que comparte su experiencia personal y profesional 
                          sobre varios temas relacionados al dinero. Se entrega material que te llevarás para recordar los temas expuestos y 
                          las experiencias obtenidas
                        </strong>
                      </b-card-text>

                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-4 variant="info"> 
                      <strong>¿A qué te refieres con experiencia personal?</strong> 
                    </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <strong>
                          El conjunto de memorias que he vivido al irme relacionando con el dinero, junto con el compartimiento 
                          de muchos errores que te pueden ahorrar tiempo.
                        </strong>
                      </b-card-text>

                      <b-card-text>
                        <strong>
                          Relacionarse con el dinero es una habilidad que se desarrolla conforme más se practica. Si bien el 
                          antecedente patrimonial de una familia o alguna otra circunstancia puede favorecer. 
                          Cada individuo debe generar una relación sana con este recurso por sí mismo, de lo contrario puede 
                          deteriorarse y perderse el patrimonio.
                        </strong>
                      </b-card-text>

                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-5 variant="info"> 
                      <strong>¿A qué te refieres con experiencia profesional?</strong> 
                    </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <strong>
                          El conjunto de memorias que he conocido de los más de veinte años que tengo de conocer casos 
                          de clientes, casos prácticos y anécdotas que circulan en el medio. Ojalá sólo fueran ejemplos 
                          de estudio en la escuela cuando cursé la Licenciatura en Derecho y los estudios en 
                          Maestría de Derecho Corporativo, pero va más allá de eso.
                        </strong>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
            
              </div>
            </b-col>

            <b-col class="animated fadeInRight">
              <img style="width: 100%;" src="./../assets/img/zen.jpeg" alt="">
            </b-col>
        </b-row>

        <hr>

        <b-row style="padding-top:23px; padding-bottom:23px">
            <b-col class="animated fadeInLeft">
              <img style="width: 100%;" src="./../assets/img/zen2.jpeg" alt="">
            </b-col>

            <b-col class="animated fadeInRight">
              <div class="acordeon">

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-6 variant="info"> <strong>¿Cómo se imparten los seminarios de Finanzas Zen?</strong> </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text> 
                        <strong>
                          <code>En línea</code>. A través de webinars en los que puedes inscribirte en este enlace los cuales ya están 
                          grabados y semanalmente se aclaran dudas.
                        </strong> 
                      </b-card-text>
                      <b-card-text> 
                        <strong>
                          <code>Presencial</code>. Cuando organizo algún seminario en vivo. También cuando me invitan a impartir algún 
                          tema en alguna escuela o empresa. Y finalmente de manera individual.
                        </strong>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-7 variant="info"> 
                      <strong>
                        ¿Cuándo se imparten los seminarios de Finanzas Zen?
                      </strong> 
                    </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text> 
                        <strong>
                          Checa el cronómetro para los cursos en línea o si prefieres un seminario presencial puedes mandarme un 
                          correo a <code>contacto@finanzaszen.com</code> para organizarnos.
                        </strong> 
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-8 variant="info"> 
                      <strong>
                        No puedo inscribirme a ningún Seminario. ¿Cómo puedo seguir aprendiendo toda esta información?
                      </strong> 
                    </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <strong>
                          También hay un <code>blog</code> de Finanzas Zen. Si aún así, no tuvieras tiempo suficiente para leer esta información, 
                          puedes seguirme en el muro de <code>Facebook</code> Finanzas Zen. O de plano en internet busca el Hashtag <code>#AProsperar</code> .
                        </strong>
                      </b-card-text>

                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-9 variant="info"> 
                      <strong>Me interesa patrocinar tu proyecto ¿Cómo te puedo apoyar?</strong> 
                    </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <strong>
                          <p>
                            ¡Muchas gracias por contribuir a la prosperidad! Puedes mandarme un correo a <code>contacto@finanzaszen.com</code> o depositar 
                            en Pay Pal. También recibo criptomonedas. Específicamente bitcoins, ethereum y ripples.
                          </p>
                          <p>
                            <code>Dirección de Bitcoin para fondear (BTC).</code> - 34WsYkN3QkxqAJdMDisbXBCypT4LrBHYsk
                          </p>
                          <p>
                            <code>Dirección de Ether para fondear (ETH).</code> - 0xe2794d72c27c052daf4413bc2beb318ad7a14fe8
                          </p>
                          <p>
                            <code>Dirección de Ripple para fondear (XRP).</code> - rLSn6Z3T8uCxbcd1oxwfGQN1Fdn5CyGujK
                          </p>
                          <p>
                            <code>Destination Tag</code> 95983498
                          </p>
                        </strong>
                      </b-card-text>

                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-10 variant="info"> 
                      <strong>
                        ¿Quién es Alan Macías Pacheco?
                      </strong> 
                    </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-10" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text> 
                        <strong>
                          <p>Soy un hombre, soy esposo y soy padre de familia. Y para cumplir esos tres puntos hago muchas cosas como:</p>
                          <p>Haberme titulado de una Licenciatura en Derecho y estudiar una Maestría de Derecho Corporativo. Me he especializado en temas legales como los fiscales, corporativos, administrativos y financieros.</p>
                          <p>Profesionalmente soy socio de algunos negocios, en donde realizo prácticas de Asesoría Jurídica, especializada en Fiscal, Corporativo y Financiera.</p>
                          <p>Obtengo dinero como abogado en juicios, como profesor dando clases en la universidad, como intermediario mercantil recomendando negocios, como inversionista independiente colocando mi dinero en diversos instrumentos de inversión y evidentemente -por si no lo habías notado-, también impartiendo Seminarios en Finanzas Zen.</p>
                          <p>En la dimensión de pasatiempos, no está incluido dar asesorías, ni dar clases gratis. Prefiero jugar con mi hija, ir al cine con mi esposa, viajar, pasear a mi perro, dibujar, pintar, escribir caligrafía y los juegos de mesa.</p>
                        </strong> 
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
            
              </div>
            </b-col>
        </b-row>

        <hr>

        <b-row style="padding-top:23px; padding-bottom:23px">
            <b-col class="animated fadeInLeft">
              <div class="acordeon">

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-11 variant="info"> 
                      <strong>
                        ¿Qué sí es Finanzas Zen?
                      </strong> 
                    </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-11" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text> 
                        <strong>
                          <p><code>&#9899;</code>Un servicio que brinda información para mejorar la toma de decisiones de proyectos personales y empresariales, administrativos y financieros;</p>
                          <p><code>&#9899;</code>Un servicio que expone información que optimice la relación con el dinero, la generación de ingresos, la administración de los recursos, la multiplicación de éstos y el destino del patrimonio de los participantes;</p>
                          <p><code>&#9899;</code>Un espacio presencial y virtual en donde se comparte la experiencia de las malas decisiones financieras que han afectado la economía personal de los participantes, con el fin de favorecer la reflexión y a partir de ahí los mejorar la relación con el dinero</p>
                        </strong> 
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-12 variant="info"> 
                      <strong>
                        ¿Qué No es Finanzas Zen?
                      </strong> 
                    </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-12" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text> 
                        <strong>
                          <p><code>&#9899;</code>No es Asesoría Financiera personalizada;</p> 
                          <p><code>&#9899;</code>No es Terapia Psicológica personalizada;</p> 
                          <p><code>&#9899;</code>No es Asesoría Legal personalizada;</p> 
                          <p><code>&#9899;</code>No ofrece servicios de Contabilidad;</p> 
                          <p><code>&#9899;</code>No promueve negocios específicos;</p> 
                          <p><code>&#9899;</code>No recomienda préstamos, ni otorga créditos a sus participantes;</p> 
                          <p><code>&#9899;</code>No recomienda instituciones financieras, seguros o fondos de inversión, ni instrumentos financieros específicamente;</p> 
                          <p><code>&#9899;</code>No es institución financiera;</p> 
                          <p><code>&#9899;</code>No negocia deudas, ni recomienda que otros las negocien por Usted;</p> 
                          <p><code>&#9899;</code>No realiza auditorías financieras, ni fiscales que puedan respaldar o autorizar la información de sus participantes;</p> 
                          <p><code>&#9899;</code>No hace seguimiento, ni lleva registro del avance financiero de sus participantes;</p> 
                          <p><code>&#9899;</code>No vigila el cumplimiento de las obligaciones de sus participantes;</p> 
                          <p><code>&#9899;</code>No está afiliada a ninguna otra organización o institución;</p> 
                          <p><code>&#9899;</code>No representa a ninguna persona, ni cuenta con poderes para negociar deudas, solicitar préstamos o realizar inversiones por cuenta de terceros, ni gestión de negocios o de cobros;</p> 
                          <p><code>&#9899;</code>No ofrece servicios de asistencia social fuera de la información que expresamente es publicada en su página oficial;</p> 
                          <p><code>&#9899;</code>No cuenta con una base de datos, para referir a terceros;</p> 
                          <p><code>&#9899;</code>No recomienda acciones ilícitas que puedan afectar a algún Gobierno, o Estado;</p> 
                          <p><code>&#9899;</code>No recomienda elaboración de fraudes o esquemas de piramidación;</p> 
                          <p><code>&#9899;</code>No expide documentos que acrediten la certificación de expertos en finanzas, ni cartas de recomendación, ni a autoridades judiciales, empresas, instituciones sociales, etc.; Y</p> 
                          <p><code>&#9899;</code>No es un espacio religioso, ni espiritual en donde se practique o promueva el Zen.<code>*</code></p> 
                          <code>*</code> Para eso pueden ir buscar un lugar donde se practique Budismo.

                        </strong> 
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-13 variant="info"> 
                      <strong>
                        ¿Entonces porqué le pusiste Zen?
                      </strong> 
                    </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-13" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <strong>
                          Mero marketing pegajoso, para que dejes de preocuparte por el dinero.
                        </strong>
                      </b-card-text>

                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-14 variant="info"> 
                      <strong>¿Porqué no encontré mi pregunta, ni respondiste mis dudas?</strong> 
                    </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-14" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <strong>
                          No cuento con facultades adivinatorias para saber lo que pasa por tu cabeza. Pero si no encontraste tu pregunta o 
                          no fueron suficientes las respuestas arriba expuestas. Puedes mandar un correo a <code>contacto@finanzaszen.com</code> 
                          y después de meditarla, tal vez el universo nos acercará a la verdad.
                        </strong>
                      </b-card-text>

                    </b-card-body>
                  </b-collapse>
                </b-card>

            
              </div>
            </b-col>
            
            <b-col class="animated fadeInRight">
              <img style="width: 100%;" src="./../assets/img/zen3.jpeg" alt="">
            </b-col>
        </b-row>
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
@media (max-width:768px) and (orientation : portrait) {
  .about {
    padding-top: 140px;
    padding-bottom: 40px;
    width: 440px !important;
  }  
  .about .row {
    display: block !important;
  }
}
.about {
  padding-top: 140px;
  padding-bottom: 40px;
}

  
</style>
