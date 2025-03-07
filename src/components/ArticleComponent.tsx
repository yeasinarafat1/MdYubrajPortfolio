import { useEffect, useState } from "react"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { motion } from "framer-motion"
import ArticleStats from "./ArticleStats"
import { cn } from "@/lib/utils"

interface ArticleComponentProps {
  vedio?: string
  img1?: string 
  img2?: string
  title: string
  content: string

  like: number
  dislike: number
  veiw: number
  icon:string
  
  englishContent: string
}

const ArticleComponent = ({ vedio, img1, img2, title, content, like,dislike,veiw,icon,englishContent }: ArticleComponentProps) => {
  const [htmlContent, setHtmlContent] = useState("")
  const [viewMode, setViewMode] = useState<'shortVeiw' | 'fullVeiw'>('shortVeiw')
  const [lang, setlang] = useState<'Bangla' | 'English'>('Bangla')
  
  const handleChangeView = () => {
    setViewMode(prevMode => prevMode === 'shortVeiw' ? 'fullVeiw' : 'shortVeiw')
  }
const handleChangeLang = () => {
  setlang(prevLang => prevLang === 'Bangla' ? 'English' : 'Bangla')
}
  useEffect(() => {
    const processContent = async () => {
      let contentToProcess
      if(lang === 'English'){
        contentToProcess = englishContent
      }else{
        contentToProcess = content
      }
      
      const result = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypeStringify)
        .process(contentToProcess)

      setHtmlContent(result.toString())
    }

    processContent()
  }, [content,  viewMode,lang]) // Added viewMode to dependencies

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-screen md:container mx-auto min-h-screen p-6 my-12"
    >
      <motion.div 
        className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row gap-8 p-8">
          <div className="md:w-1/2 space-y-6">
            {vedio ? (
              <motion.video 
                width="100%" 
                height="400" 
                muted 
                autoPlay 
                loop 
                className="rounded-xl shadow-lg object-cover"
                whileHover={{ scale: 1.05 }}
              >
                <source src={vedio} type="video/mp4" />
              </motion.video>
            ) : (
              <motion.img
                src={img1 || "/placeholder.svg"}
                alt=""
                className="w-full h-[400px] object-cover rounded-xl shadow-lg "
                whileHover={{ scale: 1.05 }}
              />
            )}
            {img2 && (
              <motion.img
                src={img2}
                alt=""
                className={cn("w-full h-[400px] object-cover rounded-xl shadow-lg", img2 === '1.jpg' && 'object-bottom')}
                whileHover={{ scale: 1.05 }}
              />
            )}
          </div>

          <div className="md:w-1/2 space-y-6">
            <motion.h2 
              className="text-4xl font-bold text-gray-800 border-b-4 border-green-800 pb-4 mb-6 flex items-center justify-center gap-2"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
            >
              {title}
              <img src={icon} alt="" className="w-7" />
            </motion.h2>
            
            <motion.div 
            className={`prose prose-lg max-w-none font-atma text-gray-600 ${viewMode === 'shortVeiw' ? 'overflow-y-hidden' : 'overflow-y-scroll'} max-h-[600px] pr-4 
                        scrollbar-thin scrollbar-thumb-green-800 scrollbar-track-gray-100`}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </div>
          
        </div>
        <div className="flex justify-end w-full items-center  py-4 px-3">
        <motion.button 
        className="
        px-7 py-3
        text-[#090909] text-lg
        rounded-lg
        bg-[#FFF0F5]
        cursor-pointer
        border border-[#e8e8e8]
        transition-all duration-300
        shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff]
        active:text-gray-600
        active:shadow-[inset_4px_4px_12px_#c5c5c5,inset_-4px_-4px_12px_#ffffff]
      "
        onClick={handleChangeLang}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
       Translate to {lang === 'Bangla' ? 'English' : 'Bangla'}
      </motion.button>
        <motion.button 
        className="
        px-7 py-3
        text-[#090909] text-lg
        rounded-lg
        bg-[#FFF0F5]
        cursor-pointer
        border border-[#e8e8e8]
        transition-all duration-300
        shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff]
        active:text-gray-600
        active:shadow-[inset_4px_4px_12px_#c5c5c5,inset_-4px_-4px_12px_#ffffff]
      "
        onClick={handleChangeView}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {viewMode === 'shortVeiw' ? 'View Full Article' : 'View Short Article'}
      </motion.button>
        </div>
      </motion.div>
      <ArticleStats like={like} dislike={dislike} veiw={veiw}/>
      
    </motion.section>
  )
}

export default ArticleComponent