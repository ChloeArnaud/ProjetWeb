<template>

  <div class="container">
    <h2>Connectez vous</h2>
    <form action="/action_page.php">
      <div class="form-group">
        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>

</template>

<script>
export default {
name: "Login",
}
</script>

<style scoped>

.container{
  background-color: #EDAD9E;
  margin: 5%;
  padding: 1%;
}

.form-group{
  padding: 1%;
  margin: 2%;
}
</style>