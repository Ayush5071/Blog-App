import {sayHello} from "@/lib/actions"
const ServerActionTestPage = () => {
  return (
    <div>
        <form action={sayHello}>
            <button>Test Me</button>
        </form>      
    </div>
  )
}
export default ServerActionTestPage
