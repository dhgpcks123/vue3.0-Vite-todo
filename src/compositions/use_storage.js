import { reactive, toRefs } from 'vue'
// toRefs는 객체의 내부 속성들 모두에게 반응성을 더해준다.


export const useStorage = () => {
    const KEY = 'my-todo-list' // 키값
    const storage_obj = reactive({ storage_id: 0 }) // id가진 객체
    const loadTodos = (initTodos) => { // 데이터 읽기
        let temp_todos = JSON.parse(localStorage.getItem(KEY) || '[]')
        temp_todos.forEach((todo, idx) => {
            todo.id = idx
        })
        storage_obj.storage_id = temp_todos.length
        initTodos(temp_todos)
    }
    const saveTodos = (todos) => { // 데이터 저장하기
        localStorage.setItem(KEY, JSON.stringify(todos.value))
    }
    return {
        ...toRefs(storage_obj), //안에 있는 거 전부 반응성으로 toRefs
        loadTodos,
        saveTodos,
    }
}
//이것이 무엇이냐. 모듈이다.
//컴포지션 API로 만들어진 모듈이다.
//vue3에서 컴포지션 API로 만들어진 모듈에 일반적으로 use를 붙인다. compositions 폴더안에 넣는 것과 비슷한 맥락이다.
//그래서 나는 이름을 use_storage.js로 하기러 했다.

/*
    모듈 export하는 방법은 Named Export방식과 Default Export 방식이 있다.
    하나의 파일에서 여러 개를 내보내는지, 하나만 내보내는지 정도의 차이이다.
    여기선 하나만 내보내기 때문에 Default export 써도 된다.
    만약 여러 개를 내보내야한다? 그러면 이름을 주고 내보내면 좋다.
    여기선 연습 하려고 Named Export를 썼다.

    import하는 방법
    import { variable } from 'named_exxport_file'
    import { useStorage } from 'named_exxport_file'

    전체 불러오는 법
    import * from 'named_exxport_file'
    vue도 결국 모듈이구나!
    Default export는 한 개 뿐이기 때문에 그냥 아무 이름으로 가져와서 써도 된다.
    import renamed_variable from 'named_exxport_file'

*/