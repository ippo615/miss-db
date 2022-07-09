<template>
  <p>{{ $t('hello') }}</p>
</template>

<script>
export default {
  name: 'HelloI18nSfc'
}
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
