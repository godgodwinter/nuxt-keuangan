<script setup>
const base_url = useBaseUrl()
const data = ref(null);
const { pending, data: datas } = await useFetch(`${base_url.value}produk`)
// watch(datas, (newDatas) => {
//   // Because posts starts out null, you will not have access
//   // to its contents immediately, but you can watch it.
//   // console.log(datas.value, newDatas);
//   // console.log('tes');
// })

// console.log('====================================');
// console.log(datas.value.data, pending);
// console.log('====================================');
data.value = datas.value.data;
console.log('tes');
</script>
<template>
  <div class="w-full px-10 py-10 grid grid-cols-3" v-if="data">
    <div v-for="item, index in data" :key="item.id" class="grid-cols-1">
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{{ item.nama }}</h2>
          <p>{{ item.desc }}</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline" v-for="label, i in item.label" :key="label.id">{{ label.label.nama }}</div>
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Detail Produk</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- {{ base_url }} -->
  <!-- Page visits: {{ datas }} -->
</template>
