import React from 'react'
import Link from 'next/link';

type Question = {
    id : number;
    question : string;
    difficulty : string;
    submissionLink : string;
}

export default function QuestionsBox ()  {

  const questions: Question[] = [
    {id: 151, question : "2 Sum", difficulty : "Easy",submissionLink : "https://leetcode.com/submissions/detail/1340182325/"},
    {id: 2678,question : "Number of Senior Citizens",difficulty: "Easy",submissionLink : "https://leetcode.com/submissions/detail/1339617161/"},
    {id: 890,question : "Find and Replace Pattern",difficulty: "Medium",submissionLink : "https://leetcode.com/submissions/detail/1339617161/"},
    {id: 961,question : "N-Repeated Elements in Size 2N Array",difficulty: "Easy",submissionLink : "https://leetcode.com/submissions/detail/1339617161/"},
    {id: 1941,question : "Check if All Characters Have Equal Number of Apperanaces",difficulty: "Easy",submissionLink : "https://leetcode.com/submissions/detail/1339617161/"},
    {id: 2405,question : "Optimal Parition of String",difficulty: "Medium",submissionLink : "https://leetcode.com/submissions/detail/1339617161/"},
    {id: 2869,question : "Minimum Operations to Collect Elements",difficulty: "Easy",submissionLink : "https://leetcode.com/submissions/detail/1339617161/"},
    {id: 1748,question : "Sum of Unique Elements",difficulty: "Easy",submissionLink : "https://leetcode.com/submissions/detail/1339617161/"},
    {id: 2215,question : "Find the Difference of Two Arrays",difficulty: "Easy",submissionLink : "https://leetcode.com/submissions/detail/1339617161/"},
    {id: 1436,question : "Destination City",difficulty: "Easy",submissionLink : "https://leetcode.com/submissions/detail/1339617161/"},
    {id: 2442,question : "Count Number of Distinct Integers After Reverse Operations",difficulty: "Medium",submissionLink : "https://leetcode.com/submissions/detail/1339617161/"},
  ];
  return (
    <div className='w-full h-48 rounded-3xl flex flex-col bg-gray-500/30 backdrop-blur-xl border border-gray-100/20 shadow-lg px-3 py-3'>
    <div className='h-full overflow-y-scroll no-scroll rounded-t-3xl'>
      <table className='w-full text-white'>
        <thead className='sticky top-0 bg-[#50D0FF]'>
            <tr className='text-left'>
                <th className='px-4 py-2'>ID</th>
                <th className='px-4 py-2'>Questions</th>
                <th className='px-4 py-2'>Difficulty</th>
            </tr>
        </thead>
        <tbody className=''>
            {questions.map((question) => (
                <tr key={question.id} className='border-t border-gray-100/20'>
                    <td className='px-4 py-2'>{question.id}</td>
                    <Link href={question.submissionLink}>
                        <td className='px-4 py-2'>{question.question}</td>
                    </Link>
                    <td className='px-4 py-2'>{question.difficulty}</td>
                </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

