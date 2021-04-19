<template>
  <div>
    <div class="flex flex-col items-center">
      <div>
        <h2 class="blogTitle">Rilke's <i>Archaic Torso of Apollo</i></h2>
      </div>
      <div class="blogSubtitle">
        Jan. 15, 2018
      </div>
    </div>

    <div class="blogText">
      I recently had the pleasure of playing the role of the Table Topics speaker at our weekly Toastmasters meeting.
      For our topic I chose the idea of beauty.
    </div>

    <div class="blogText">
      The concept seems at once ubiquitous and nebulous. As easily as it comes to my lips, so stubbornly does the
      thought it expresses resist clarification. I find it difficult to translate my thought into language not
      containing the word 'beauty'.
    </div>

    <div class="blogText">
      It helps to have something concrete to ground our reflection. One of my favorite poems, Rilke's
      <i>Archaic Torso of Apollo</i>, has the advantage that in addition to being a beautiful poem, it is also in many
      ways <i>about</i> the experience of beauty.
    </div>

    <div class="poem flex flex-col items-center my-12">
      <pre class="poem">
        We cannot know his legendary head
        with eyes like ripening fruit. And yet his torso
        is still suffused with brilliance from inside,
        like a lamp, in which his gaze, now turned to low,

        gleams in all its power. Otherwise
        the curved breast could not dazzle you so, nor could
        a smile run through the placid hips and thighs
        to that dark center where procreation flared.

        Otherwise this stone would seem defaced
        beneath the translucent cascade of the shoulders
        and would not glisten like a wild beast's fur:

        would not, from all the borders of itself,
        burst like a star: for here there is no place
        that does not see you. You must change your life.</pre
      >
    </div>

    <div class="blogText">
      Indeed, beauty "dazzles" and transfixes us. It combines an inviting smile with a retreating dark center, a felt
      brilliance with a displaced and unknown head. The experience of beauty demands to be recorded, and yet with equal
      intensity it refuses to be ensnared, trapped on the page or in the mind. It has a quality of <i>aliveness</i>; it
      "glisten[s] like a wild beast's fur."
    </div>

    <div class="blogText">
      Beauty invites us to <i>see</i>, but also stimulates us to try to see ourselves seeing. It compels us to reflect
      on why we are so moved, to try and catch ourselves in the moment of rapt attention and pin that moment to our
      corkboard, like a preserved butterfly. Beauty is powerful, and we feel impelled to investigate the sources of its
      power. We are pushed into a kind of sine wave between wanting to see, to inhale the beauty, and wanting to
      understand why it moves us.
    </div>

    <div class="blogText">
      This idea calls to mind the etymology of 'aesthetics'. Beauty is tethered to what the Greeks called
      &alpha;&iota;&sigma;&theta;&eta;&sigma;&iota;&sigmaf; (<i>aistheisis</i>), or sense-perception. We're tempted to
      think of beauty as living only on the emotional side of the mind/passions dichotomy. But can we really understand
      the idea of beauty without accounting for the intellectual experience, the quest to understand and organize,
      occasioned by a feeling of beauty?
    </div>

    <div class="blogText">
      Rilke cashes out the interplay between the intellectual and emotional/perceptual aspects of beauty in ethical
      terms. The imperative that concludes the poem arrives abruptly, and yet we feel somehow prepared for it. Much of
      the conclusion's force can be traced to the way in which the earlier aesthetic musings manage to pry open a
      certain emotional part of the reader, preparing her for contact with the ethical dimension.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Post18 extends Vue {}
</script>

<style scoped>
.poem {
  font-family: Baskerville;
  font-size: 18px;
}
</style>
