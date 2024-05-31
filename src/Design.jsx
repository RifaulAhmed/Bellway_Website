import React from 'react'
import CNavbar from './CNavbar'
import './Card.css'
import { useNavigate } from 'react-router-dom';

const Design = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/Figma');
    };
    const handleClick1 = () => {
      navigate('/photoshop');
    };
  
    const handleClick2 = () => {
      navigate('/illustrator');
    };
    const cards = [
        {
          src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAADMCAMAAACY78UPAAABOFBMVEUDARyiWf//cmLyTh4Kz4MavP4AAADyTBr5YUWmW/8K1IYAABn/dmUDABQAABv6UR5tIx1zMzXqTzdpOqipTf8A1ncHhlnlZlsbxP8bwf8DABAK2IgavP/2bmDTXlXIQB6iNB3IWVEAAAkVk8ppKpymVP9tkf8Wm9UThbgIqnBTGxxwLCpYJy4VBxyYMR3YRh6gSESzUEtjIBxoLjQrDhweCRx6Jx2BOTuwOR27PB2rTEeEKx3pSx5TGACSLADAPAfnW0rne3XOVUihOStDJXN1QsNdN64ALk8JTnNWL40KQWEOY40XDDOPTuIFGTIrGE4Aao5rZdJsgO4WmtV0QLsMBieUUeoYrOkYBTOEO8+UQugQcZ4AICMAp2AAv20Ai1IFQzYJv3sEGCMFV0EGc1AGXUQEMy4EHSgEZ/N9AAAEJElEQVR4nO3bDVcTRxTG8Q2SgWR2Nlpq2J3FVhdtEgq+1XdthVYLEoG+gGm1FQMC3/8bdJcEdJO5cw4pbc7cfX6fIP9z786GiXoeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwOgCmRcE4/5E/42Fi3nfXspbDJTklr5081Zt0LQ/aPb2kmJV/qhWuzBoanpiiO/f8eS4P+y5WXg2XG3uTsuvLHIJv2uqprrT8u/UuD/xuSCyye40nMPE75mrLd0TE/cYHG5fT529+yv3N/0iseXWbv+S85tOjtvW7f7A75Pjtnb79x1/wh+M2P3Q8UV/NGL3Hce76cfb2u38A47uYnU/HrH7muPdN0c81247fq4tjNi96Pj72yOz7Xvu+Jp73tWRvp8/cXzNPcvAbfNmcLVKflOlu53/lnrs8ZnvW1x/ifXdOuP92iyDLT9mnjjR7V/j8+PB0wuGcmO3P/GQ0y8HS1ef1WpTA6b9wWj/ypMlDkfaJ0Hy/Q/Pv8hbnj2xvLy8srLy4093E07DTquFePHyTSmv8rNQGSFWm50wiqKwM78mxLg/6zlS4lWpUikNds9kjYFYb4RRuSdNbwseL7FU8npjKPqkW4rmafWxsLOZjPsDnw+xVTJlH3cr3clVZzMvr7LY9WTLFN3rlmooO7PKYOJyxzjsXreYN2WXywx+AxcvLd3t0JgdzTu/6XqLys66jdXZ4baux/3B/yV63KXK9V/MW85g4FKT2Wl3g5p3OdJuP+HJK0v3TDRHdrfdPtLFNt1d+pVa87S76faiWx7v0o3fLN2OP+Bigx73jW8s3b8XtLvheHdR93ymmOda8sL6HiO7wzW3v7AFgh53+r2FDnd73NYXeGVmzfxniftr7nnqte3vko45ey7adP6yiT7Z0u5188DDd66PO3vCjZdrvW7RNIWnL28Gt8lqx3y9lnUHwnC0RWX3tzyjd96Q94pyeOJRx3P7HXZKJdvDt+f9e+RAtKPPRx6FzYTFtDNSbG1Qvxt4YrM510+PoqixLty+ccjT4o/rf779Mm+7d2or4bXnO1EYdhrvNgWTHe+T+q/63+8v5+2eLLRMRB+bFe/RH1pxtTqZV60zqxwk1W48GF2Abim7hmr23XJv0pjNvVuZp829W9djczbv7mCPmDbzbl0vaDdVzbtb7lNPN+9uRa85627dQje6C979kW+37VyL9zndrOTJA/o9NnnE4LaYEtDz7vK6UsqjH/CY8eOdLvohueicx00PPD7gPO6U7Jqyqy3e48423ZTdZT7tlDocumCrtrj81zgbudfNHW7VeFcXIDt9ieuD7ukNejVufeD+bJ9Sen+3G2e69UPH/63x2Uit1dHRXqJVkap7giKcZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPB/+Qd934IACS+26QAAAABJRU5ErkJggg==',
          title: 'Figma',
          description: 'Figma is a powerful, cloud-based design tool that enables real-time collaboration and streamlined design processes for teams.',
        },
        {
          src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAjVBMVEUAHSYAyP8AzP8AChAKiKsKg6QAzv8Ay/8AGCAAAAAAPE0AAAUAncgAGyMAFBsAx/4ALz0AJTAAERcAEhkACA0AlL0AwPUAsOAAo9AKqdYKgKAAtecAfJ4AvfEAjLIAXHYAa4gAVGwASl8AP1IAZH8ALTsARloAIi0AN0cAPlEAaogAXncAdJMAkLgAV2803gdBAAAIAElEQVR4nO2d6WKyOhCGWRNSDCibUASXVmtb9P4v74D9qjaJS1wC5OT9WVPIY7aZySRquvzS2q6AAClGOaQY5ZBilEMHRmjIJUgzwsy2ZJKdQYoRvCJTJqFXQDPapiaTTFsxyiDFKIcUoxxSjHJIMcohxSiHFKMcUoxySDHKIcUohxSjHFKMckgxyiHFKIcUoxxSjHJIMcohxSiHFON1wo7jeF4Y1GpSRaJG7o8i0ww8Bz+p8lfqfkbsjtarxfz7/WtWVRP71SobxT8qrUk1XY1MFAXO0xgu6W5GrGXgj4g8rt2fkvFmtnYj73kc53Q3o/O5f8AZwZq1iOdB1EZr3s/4cg3jTgZIyjUSTymSscE0Bp9I9BQkmLHutSAeCV6ahDPWbem/i23KFhjrFwxMkaOyFUYd5COB60g7jDoshuIgW2LUYTIS1l3bYtRhHoiaeFpjrCce9DysP2qPUQdfgtbJZzBC+GOKN9Y4hOSnB/kjMb31CYxJGm9K255UVWWXg7EPwAlOIxbTWx/PCAfIjWrf2Gxc5shF0bpKdXZ/Bp9C5tZnMLpEiQAtJz6LEoqZdgQw1sKRVzIhhyIaUgxjTYnmPj0swUTE1CqKUdOCZUJBwoJd9rESx6iFa7qzghcBnVUgo2ZOqTEppLOKZNTQwCA7aypgZhXK6AyphkyCR1Ccl1BGDaXktHNpQOImBF/LcfDNhp9YRo8akeD7pK+MPROZH+vFfPq9nS/ehh8Bck3vBlKxjBj7JGPF7qw4ROHWygr917oH0C/GA3s6QtzhdrGMGsqIzmpsIhZhFL6nEBhEYQhr1rxccFIKZoxK44rSpmcnp5yVZluhmHNBCmYMKrI0vXg4qGJa8Ef/VHCtqoIZvW+y9JhkNIfji5EFn2tLUzTjgiydE4zu9Fzo4J+STjPOLzCi2TXhoW4zXmhH9yrEjjNuydLZMWNAftxHxoBsJ5gelXaWpInQR8aj1/3IiI9sAJSSfkkfGdGAmDSBdXhXSC4s/WSMCqK2YHawV9388qrRfUZnTfkdi71ZRjslzdMOOTFHX0CXGc0JhXHYD6CdS92A2WT6Nhy+rKYzKy2MXyO2y4yoID2Jw/KINRqxHCGzcY9rRzkwERp+DX5s9Q4zBu9kMxrxvjCjqy6I3AgncINtahgdZsQB2Yw6eA9/P6XcLjBnVAN7aB0DP6Q/6QYj2tCTinYYjoT7fHIzxEEvb1xRWYGMDHP72HtExLICTjvCDl/gWRgjZnkU4Hvf6bCTEJ8tH7UDK4oxRKyNq+TwIvxB2KrgYbvMYhhDNM8ZiKA6YhyRjItHbYU8nRE7AYq+M2YIKgkPTYUx0VeN8lHbBE/ZK4/+XUIYRQh566+Bzw6yHduqdU0S8vP1g1KxnpDzUJSlNdmp3KTj5GTKAxGuQqRFDvMH5aA/I3fF+E1dMc6mrsD1HwTK7dKNfPmQHZ8W86xmfyPkDHsd+ttHZLq2xgg2xJTikOGsXalYu38Tti1GkFIrjMkK5oBkhu6delpirBGpTujGzGgOyOd3UraUhzyI6HHmrNhPgiBb3XViop18cps5lTACAQ+hbIER+HO2BUNHe44o0/XNU2wb5zucU6ueSy8fR/+3+bhxihXMCMGYDGD8gczOBJGBP7utwwplNEC2PTtHYoeKhvyhzIa3NKU4RgP48erSKuAN6aS6I0H9/QZnRAhjk6tQxNPIvdzVvFFxds8DxPxTz3NscvirnXEO87h6C9zrFnIHZ2e/NJB5vIPyCYx5GQ/SNMuyNB1s7Gq7NpHL4SVhZJ3M6dh9gzlnyOpJPrKLfuRGzZFrvhrVtsC8ONeURs6ZbCV43+o6hWZJph8dC2R8E08nGTXsvrAjQL8V5HpFNxmbYPg8P00JVjwDoKuM9SriTk9S0plL59RdxiYqO2VFZXdVnHLs6nSZUdOCqPKZJgHkmXa6zVjXT4uZHRasrx+RXWesTYIFa7U8ldvLUucZ62EZDmhIngMFPWCsm5LhOydyMdbWHZnaW7/m+q27fjBqKKYSe67fL+8JI7XLfG4rnVRPGDV3Q2Z9bKVjDMnUnjOHX0j1hZFK0u5lX8UeY39gL7odr3c9OsOIcVKeDC7X45HKwhr2b+3AIx0kX+jEJR6YyhbgSCfrEKPf7MN9hcyry6jsHh4PsluMOgSJ9YIiIijlIYtKmGSeRWOrY4xN7UFuzT+Qa4ae01yyGLjmnD6dxLE8dpBxdzLOzwf2bLt6e1tNq7hgeJA8J666yLh7yiGRnOUiGxuOl3SV8YK47hXoJ6PBdZlJPxl1rrtMeskIZl0+x3paHIy8t331kBFk54x3hvrHCMa89yt3iPFKxAGdhXZB3WHE+hWn5gxYdSEf4FYfOZyybLa/jwbp8npTfK/H3/ls3BrrCMJZfjIxe2fFZoubkpDuv7t7eZTG0QhweD3EowL0aeX0NR27FgRFub4xx/P+O9id0fCv7knDdEx3+W1lCdzfdf5zv3k6WZk33/v9gLv0MaEba7J/XBghpL1tZxPb2mwsu3pfjBC653Lhjv4mAq5946A5IGKaQXjv7w10lPGhUoxySDHKIcUohxSjHFKMckgxyiHFKIcUoxxSjHJIMcohxSiHFKMcUoxySDHKIcUohxSjHFKMckgxyiHFKIcUoxxSjHJIMcohxSiHFKMcUoxySDHKISbjKzJlEnqlGWFmWzLJPvwa0Z5Rh4ZcOpxtOjDKK8UohxSjHFKMcuj/wPgfci/BDGsDDXkAAAAASUVORK5CYII=',
          title: 'Photoshop',
          description: 'Photoshop is the industry-standard software for image editing and graphic design, renowned for its powerful features and versatility.',
        },
        {
         src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfDn2rF4bhmgF_PrNf_ICHDWTP9SDO_C_shA&s',
          title: 'Illustrator',
          description: 'Illustrator is the leading vector graphics software, celebrated for its precision and robust tools for creating scalable artwork.',
        },
      ];
      

  return (
    <>
    <CNavbar/>
    <div>
      <h1 className='nbs' style={{marginTop:'140px'}}>UI/UX Designer</h1>
      <div className="card-container">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <img src={card.src} alt={card.title} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              
              </div>
            </div>
          ))}
          <div>
            <div className='bi'>
            <button  onClick={handleClick} class="animated-button">Click Here</button>
            <button  onClick={handleClick1} class="animated-button1" style={{position:'relative',left:'-8px',top:'-32px'}}>Click Here</button>
            <button  onClick={handleClick2} class="animated-button2" style={{position:'relative',left:'400px',top:'-82px'}}>Click Here</button>
            </div>
          
          </div>
            
        </div>

    </div>
    </>
  )
}

export default Design