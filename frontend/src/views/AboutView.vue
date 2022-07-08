<template>
  <div>
    <div id="blockImageAccueil">
      <div class="container" width="600px" height="1000px" style="margin-top:40px; font-family: Georgia, serif;">
      <h2>Our story</h2>
      <img id="imgAccueil" src="../assets/AccueilImg.jpg" alt="Snow" style="width:400px"> 
        
        <h5 style="margin-top:20px;" >Dans le cadre du module « Programmation Web » nous avons décidé de réaliser une papeterie en ligne dans le but de permettre l’achat de matériel comme des cahiers, agenda, stylo et bien plus….</h5>
        
        <h6 style="margin-top:40px;">Chloé ARNAUD</h6>
        <h6>Farah FEURGUENE</h6>
        <h6>Aliaa ALBORHAMY</h6>
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
  background-color: #eece97;
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
