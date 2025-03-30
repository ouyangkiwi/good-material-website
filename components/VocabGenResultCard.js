import moment from 'moment';
import { faCopy, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function VocabGenResultCard({ result, setUserInput, showToast }) {
    const { wordList, zhWordList } = result.payload;

    const handleCopy = (zhWord) => {
        setUserInput(zhWord);
        // 平滑滾動到頂部
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // 顯示 Toast
        showToast('已複製到輸入框');
    };

    const wordItems = wordList.map((word, idx) => {
        return (
            <div className="p-3 border-2 border-slate-300 rounded-md" key={idx}>
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-700">{word}</h3>
                    <div className="space-x-2">
                        <button
                            className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded transition-colors"
                            title="產生例句"
                        >
                            <FontAwesomeIcon icon={faCommentDots} />
                        </button>
                        <button
                            className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded transition-colors"
                            title="複製中文"
                            onClick={() => handleCopy(zhWordList[idx])}
                        >
                            <FontAwesomeIcon icon={faCopy} />
                        </button>
                    </div>
                </div>
                <p className="text-slate-400 mt-3">{zhWordList[idx]}</p>
            </div>
        )
    })
    return (
        <div className="bg-white shadow-sm p-4 rounded-xl my-3">
            <h3 className="text-lg">
                {result.title} <span className="py-2 px-4 bg-slate-200 font-semibold rounded-lg inline-block ml-2">{result.language}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                {wordItems}
            </div>
            <p className="mt-3 text-right text-slate-500">
                Created At: {moment(result.createdAt).format("YYYY年MM月DD日 HH:mm:ss")}
            </p>
        </div>
    )
}