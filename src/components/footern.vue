<template>
  <div class="footer">

      <div class="container info">

        <div style="padding-bottom: 20px;">
            <ul class="social-menu"> 
                <li><a href="https://facebook.com/"><i class="fab fa-facebook"></i></a></li>
                <!-- li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li -->
                <li><a href="https://linkedin.com/"><i class="fab fa-linkedin"></i></a></li> 
                <li><a href="https://instagram.com/"><i class="fab fa-instagram"></i></a></li> 
                <li><a href="https://youtube.com/"><i class="fab fa-youtube"></i></a></li>
                <li><a :href="'https://wa.me/'+ whatsappNum +'?text=' + whatsappTxt " target="_blank"><i class="fab fa-whatsapp"></i></a></li>
            </ul>
        </div>

        <hr>
        
        <b-row style="padding-top:23px">
            <b-col style="text-align: left;"> <strong>© {{new Date().getFullYear()}} Alan Macías Pacheco – Todos los Derechos Reservados</strong> </b-col>
            <b-col style="text-align: right;"> Finanzas Zen ® </b-col>
        </b-row>

      </div>
  </div>
</template>

<script>
export default {
  name: 'footern',
  data: function () {
      return {
          whatsappNum: '+5214423475712',
          whatsappNumParse: '+52 1 (442) 347 5712',
          whatsappTxt: 'Hola estoy interesado en tomar el curso de Finanzas Zen',
      }
  }
}
</script>

<style scoped>

@media (max-width:768px) and (orientation : portrait) {
  .footer {
      width: 440px !important;
  }
  .footer ul {
      width: 85% !important;
  }
}


.footer {
    background-color: #009ca4;
    color: #ffffff;
    font-weight: bolder;
}
.footer .info {
    padding-top: 70px;
    padding-bottom: 60px;
}

.footer .title {
    font-weight: bolder;
}

.social-menu {
	display: flex;
	list-style-type: none;
}
 
.social-menu i {
	color: #fff;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	font-size: 25px;
	margin-right: 10px;
	transition: all 0.2s ease-in-out;
	display: flex;
	justify-content: center;
}

.social-menu i:before {
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
        font-weight: 400;
}

.social-menu a {
	text-decoration: none;
}

.fa-facebook {
	background:#3b5998
} 

.fa-linkedin {
	background:#007bb6
}

.fa-twitter {
	background:#00aced
}

.fa-instagram {
    background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
	
}
.fa-whatsapp {
    background: #00E676;
}

.fa-youtube {
	background:#c4302b
}
.social-menu i:hover {
	opacity: .7;
	border-radius: 0;
}
ul {
    width: 25%;
    margin: auto;
}
</style>
