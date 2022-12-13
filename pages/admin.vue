
<script setup>
// overide layout
definePageMeta({ layout: "admin", });
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
// -----------------------------
//jika ingi menambahkan layout baru
// const adminLayout = 'admin';
// -----------------------------

console.log(runtimeConfig);
</script>

<template>
    <div>
        <!-- <NuxtLayout :name="adminLayout"> -->
        <NuxtPage />
        <hr>
        {{ runtimeConfig }}
        <hr>
        {{ appConfig }}
        <!-- </NuxtLayout> -->
    </div>
</template>