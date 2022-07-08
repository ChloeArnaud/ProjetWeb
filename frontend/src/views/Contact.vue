<template>
  <div>
    <div id="blockImageAccueil">
      <div class="container" style="width:100%; margin-top:40px; font-family: Georgia, serif;">
      <section>

    <!--Section heading-->
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contactez nous</h2>
    <!--Section description-->
    <p class="text-center w-responsive mx-auto mb-5">Avez-vous des questions? N'hésitez pas à nous contacter directement. Notre équipe reviendra vers vous dans une question d'heures pour vous aider.</p>

    <div class="row" style="margin-left:90px;">

        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" method="POST">

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control" required placeholder="Nom" style="margin-top:20px;">
                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control" required placeholder="Email" style="margin-top:20px;">
                        </div>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control" required placeholder="Sujet" style="margin-top:20px">
                        </div>
                    </div>
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" required placeholder="Votre message" style="margin-top:20px" ></textarea>
                        </div>
                    
                        <button type="submit" style="margin-top:20px;">Envoyer</button>
                    </div>
                    
                </div>
      
                  

                <!--Grid row-->
              
            </form>
        </div>
        
    </div>
    <!-- <div class ="row">
            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
    </div> -->
        <!--Grid column-->
      </section>
</div>
  </div>
  </div>
</template>

<script>
export default {
  name: "BlocAccueil"
}
</script>

<style scoped>

#blockImageAccueil{
  background-color: #E5BB70;
  display: inline-block;
  margin-top: 40px;
  width:600px;
  height:600px;

}

.container {
  position: relative;
  /* width: 100%;
  max-width: 600px; */
  box-shadow: #EDAD9E;
}

.container img {
  width: 100%;
  height: auto;
}

.container .btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  /*text-decoration: none !important;*/
  background-color: white;
}

.container .btn:hover {
  background-color: #EDAD9E;
}

#imgAccueil{
  padding: 2%;
}

.nav-link{
  color: black;
}

.nav-link :hover{
  color: black;
}

</style>
