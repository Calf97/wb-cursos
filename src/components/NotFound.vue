<template>
    <div class="notFound">
        <h1>404</h1>
        <h3>Page not found</h3>
    </div>
</template>
<script>
export default {
    name:"NotFound",
}
</script>
<style scoped>
.notFound{
width: 100%;
max-width: 1200px;
margin: 50px auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 60%;
}
h1{
    font-size: 100px;
    font-weight: 300;
}
h3{
    font-weight: 200;
}
</style>