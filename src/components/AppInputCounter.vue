<script>
export default {

}
</script>

<template>

    <div id='bathrooms' class="ms_input">
        <input id='input_value' type="hidden" name="bathrooms" value="{{ old('bathrooms', '1') }}">
        <button id="minus" class="input_btn">-</button>
        <span id="ms_value"></span>
        <button id="plus" class="input_btn">+</button>
    </div>
    
</template>

<style lang="scss" scoped></style>