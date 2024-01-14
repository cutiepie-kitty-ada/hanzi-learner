<script>
  import "chota";
  import { Container, Nav } from "svelte-chota";

  import HanziCard from "./components/HanziCard.svelte";
  import HanziCarousel from "./components/HanziCarousel.svelte";
  import HanziSetting from "./components/HanziSetting.svelte";
  import { getAllCharacters } from "./hanzi";

  let options = {
    perPage: 1,
    loop: true,
    draggable: false,
    easing: "linear",
  };
  export let version;
</script>

<div id="app">
  <Container>
    <Nav>
      <a slot="left" href="/" class="brand">学习写汉字</a>
      <span class="is-vertical-align" slot="right">
        <HanziSetting />
      </span>
    </Nav>
    <HanziCarousel {options}>
      {#each getAllCharacters() as character, index}
        <HanziCard {character} {index} />
      {/each}
      <span slot="left-control">Prev</span>
      <span slot="right-control">Next</span>
    </HanziCarousel>
  </Container>
</div>
<footer class="text-center bg-light">Version: <strong>{version}</strong></footer>

<style>
  :global(:root) {
    --color-primary: #a2249c;
    --color-darkGrey: #663fc2;
    --color-grey: #1a78e4;
    --color-error: #f80000;
    --grid-maxWidth: 108rem;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem; /* Footer height */
  }

  #app {
    margin-top: 3rem;
  }
</style>
