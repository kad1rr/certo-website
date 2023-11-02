import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Main from './layouts/Main'

const App = () => {
    return (
        <div className='w-full h-full flex flex-col items-center'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App