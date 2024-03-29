import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Image, Shimmer} from "react-shimmer";
 
export function CardDefault({ButtonText, imgLink, title, to, name, scale}) {
  return  (
    <Card className={`bg-white border text-black max-w-[22rem] max-h-[24rem] group overflow-hidden transform-gpu transition-transform ease-in-out duration-300 ${scale} hover:scale-100`}>
      <CardHeader
        floated={false}
        shadow={false}
        className="m-0 rounded-none w-full h-3/4"
      >
        <div style={{height:'100%', width:'100%'}}>

            <Image
              src={imgLink}
              loading="lazy"
              fallback={<Shimmer width={800} height={300} />}
              NativeImgProps={{alt:title, className:'h-full w-full object-cover'}}
            />
        </div>
      </CardHeader>
      <CardBody className="h-1/4">
        <Typography variant="h4" className="text-black font-inter">
          {title}
          <p className="text-sm font-inter">{name}</p>
        </Typography>
        {/* <Typography className="mt-3 mb-0 font-inter font-normal text-sm text-[#aaaaaaa4]">
          {trimText}
        </Typography> */}
      </CardBody>
      <CardFooter className="flex pt-0 items-center justify-between">
        <div className="flex items-center -space-x-3">
          {ButtonText !== '' ? <Link to={to}>
        <Button aria-label="know more" className="flex items-center gap-2">
          Know more{' '}{ButtonText}
        </Button>
        </Link> : '' }
       
        </div>
      </CardFooter>
    </Card>
  );
}


export function Review() {
  return (
      <section className="bg-white py-12 lg:px-12">
  <div className="container px-6 ">
      <h1 className="text-2xl font-redhat text-yello-100 capitalize lg:text-4xl">
          What our <span className="text-blue-500 ">clients</span> say
      </h1>

      <p className="max-w-2xl mt-2 text-gray-500 font-outfit">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error
          alias, adipisci rem similique, at omnis eligendi optio eos harum.
      </p>
  <div className='main w-full flex bg-red-400 items-start'>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                  tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                  aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                  <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                  <div className="mx-2">
                      <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                      <span className="text-sm text-gray-500">CTO, Robert Consultency</span>
                  </div>
              </div>
          </div>
      </div>
      {/* 2 */}
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                  tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                  aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                  <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                  <div className="mx-2">
                      <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                      <span className="text-sm text-gray-500">CTO, Robert Consultency</span>
                  </div>
              </div>
          </div>
      </div>
      {/* 3 */}
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                  tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                  aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                  <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                  <div className="mx-2">
                      <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                      <span className="text-sm text-gray-500">CTO, Robert Consultency</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</section>
  )
}