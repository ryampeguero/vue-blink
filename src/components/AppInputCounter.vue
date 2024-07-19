<script>
export default {
    
}
</script>

<template>
    <input id='input_value' type="hidden" name="rooms" value="{{ old('rooms', '1') }}">
    <button id="minus" class="input_btn">-</button>
    <span id="ms_value"></span>
    <button id="plus" class="input_btn">+</button>
</template>

<style lang="scss" scoped>
</style>