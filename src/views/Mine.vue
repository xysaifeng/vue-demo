<template>
    <div class="mine">
       <h1>个人中心</h1>
        <!-- <p>id {{id}}</p>
        <p>name {{name}}</p> -->
        <anchored-heading :level='3'>
            Lorem ipsum dolor.
            <s>hhhh
                <div>uuuu</div>
            </s>
        </anchored-heading>
    </div>
</template>

<script>
export default {
    name: 'mine',
    props: {
        id: String,
        name: String
    },
    created() {
        console.log(this.$route);
        // console.log(this.$router);
    }
}
</script>

<style scoped>
    h1 {
        color: yellow;
    }
</style>