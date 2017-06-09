import Vue from 'vue'
import Home from '@/components/Home'

describe('Home.vue', () => {
  it('should render a Snack-Header contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.col-md-4 > h2').textContent)
      .to.equal('Snacks')
  })
})
