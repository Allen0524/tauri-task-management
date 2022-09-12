import type {AppProps} from "next/app"
import {Provider} from "react-redux"
import {motion, AnimatePresence} from "framer-motion"
import {Layout} from "../components"
import "../style.css"

import {store} from "../store/store"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({Component, pageProps, router}: AppProps) {
	return (
		<Provider store={store}>
			{/* <AnimatePresence>
        <motion.div
          key={router.route}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence> */}
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}
