<template>
  <div>
    <div id="blockImageAccueil">
      <div class="container">
        <img id="imgAccueil" src="../assets/AccueilImg.jpg" alt="Snow" style="width:100%"> <!-- 500px-->
        <button type="button" class="btn btn-light"><router-link class="nav-link active" aria-current="page" to="/categorie">Shop</router-link></button>
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
  margin: 1%;
}

.container {
  position: relative;
  width: 100%;
  max-width: 600px;
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