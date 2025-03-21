import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNTM3NjAxLCJpYXQiOjE3NDI1MzczMDEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjlkNTc3MzYyLWUwMjMtNDc3OS04ZTRiLTE4NDY1ZDliMmUwMCIsInN1YiI6InZhaXNoYWxpc2Fobmk4ODFAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiYWJjZGUiLCJjbGllbnRJRCI6IjlkNTc3MzYyLWUwMjMtNDc3OS04ZTRiLTE4NDY1ZDliMmUwMCIsImNsaWVudFNlY3JldCI6IndzekFLRldqSmt0ZmtpRFIiLCJvd25lck5hbWUiOiJWYWlzaGFsaSBTYWhuaSIsIm93bmVyRW1haWwiOiJ2YWlzaGFsaXNhaG5pODgxQGdtYWlsLmNvbSIsInJvbGxObyI6IjIyMDQxMDE3MDAyNyJ9.VsJvRqzeffVJTO3ga6CKXVLIVLXNvWM7ZfOtxMpSxMk"
  useEffect(() => {
      const fetchData = async () => {
          try {
            const response = await axios.get("http://20.244.56.144/test/users", {
              headers: {
                "Authorization": `Bearer ${token}`,  
                "Content-Type": "application/json",
              },
              
            });
            console.log("API Response:", response.data);
              setData(response.data);
          } catch (error) {
              setError(error.message);
          }
      };

      fetchData();
      console.log(data);
  }, []);

  return (
    <>
      
    </>
  )
}

export default App
