<template>
    <footer
      v-if="$slidev.nav.currentLayout !== 'cover' && $slidev.nav.currentLayout !== 'center'"
      class="absolute bottom-0 right-2 p-2"
    >
      {{ $slidev.nav.currentPage }}
    </footer>
</template>