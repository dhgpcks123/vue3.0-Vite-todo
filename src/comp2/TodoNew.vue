<template>
  <section class="mb-5">
    <div class="container">
      <div class="row justify-content-center m-2">
        <div class="col border border-primary rounded">
          <input
            type="text"
            id="todo_input"
            class="form-control my-2"
            v-model="job"
            placeholder="여기에 할 일을 적으세요"
          />
          <!-- 다국어지원 vue에서 제공하는 게 또 있군 -->
          <!-- back, front 분리 시 타임리프 사용 고민 -->
          <div class="row my-2">
            <div class="col-6">
              <input type="date" v-model="date" :min="today" />
            </div>
            <div class="col-6">
              <button
                type="button"
                class="btn btn-primary btn-sm float-end"
                @click="onAddTodo"
              >
                작업추가
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, toRefs, inject, ref } from 'vue'

const today = inject('today')
const addTodo = inject('addTodo')
const val_obj = reactive({
  job: '',
  date: today,
  today: today,
})

const onAddTodo = () => {
  onAddTodo(val_obj.job, val_obj.date)
  val_obj.job = ''
  val_obj.date = today
}
// arrow function은 바인딩 이슈 자유롭고, function 안 써도 된다는 이점이 생김
// 사실 이거랑 같은거지 뭐.. ArrowFunction, const하는 게 더 좋은 이유는 뭘까?
// const onAddTodo = function(){}
// function onAddTodo(){}

const { job, date } = toRefs(val_obj)

</script>