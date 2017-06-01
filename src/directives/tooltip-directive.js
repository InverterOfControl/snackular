/* global $ */
import Vue from 'vue'

export default Vue.directive('tooltip', function (el, binding) {
  $(el).attr('data-toggle', 'tooltip')
    .attr('title', binding.value)
    .attr('data-placement', binding.arg)
    .attr('trigger', 'hover').tooltip()
})
