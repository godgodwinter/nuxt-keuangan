<script setup>
const submitted = ref(false)
const submitHandler = async () => {
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
}
</script>

<template>
  <div class="flex justify-center">
    <FormKit type="form" id="registration-example" :form-class="submitted ? 'hide' : 'show'" submit-label="Register"
      @submit="submitHandler" :actions="false" #default="{ value }">
      <h1>Register!</h1>
      <p>
        You can put any type of element inside a form, not just FormKit inputs
        (although only FormKit inputs are included with the submission).
      </p>
      <FormKit type="text" name="name" label="Your name global" placeholder="Jane Doe" help="What do people call you?"
        validation="required" />
      <hr />
      <FormKit type="text" name="name" label="Your name" placeholder="Jane Doe" help="What do people call you?"
        validation="required" outer-class="mb-5" label-class="block mb-1 font-bold text-sm"
        inner-class="max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500"
        input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400"
        help-class="text-xs text-gray-500" />
      <FormKit type="text" name="email" label="Your email" placeholder="jane@example.com"
        help="What email should we use?" validation="required|email" :classes="{
          outer: 'mb-5',
          label: 'block mb-1 font-bold text-sm',
          inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
          input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
          help: 'text-xs text-gray-500'
        }" />
      <div class="double">
        <FormKit type="password" name="password" label="Password" validation="required|length:6|matches:/[^a-zA-Z]/"
          :validation-messages="{
            matches: 'Please include at least one symbol',
          }" placeholder="Your password" help="Choose a password" />
        <FormKit type="password" name="password_confirm" label="Confirm password" placeholder="Confirm password"
          validation="required|confirm" help="Confirm your password" />
      </div>

      <FormKit type="submit" label="Register" />
      <pre wrap>{{ value }}</pre>
    </FormKit>
    <div v-if="submitted">
      <h2>Submission successful!</h2>
    </div>
  </div>
</template>