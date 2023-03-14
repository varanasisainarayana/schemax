"use client";
import React from "react";
import { motion } from "framer-motion";
const Image1 =
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
const Image2 =
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
const Image3 =
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
const Image4 =
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
const Image5 =
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
const Image6 =
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

const ProductsListSlide = () => {
  const imgComp = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <img
        src={Image2}
        alt="Product 2"
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white px-6 py-4">
        <h3 className="text-xl font-medium mb-2">Product 2</h3>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </motion.div>
  );

  const gridd = () => {
    return (
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full">
        <div
          className="col-span-2 row-span-1 h-1/2 bg-cover bg-center"
          //   style={{
          //     backgroundImage: Image2,
          //   }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative h-[200px]"
          >
            <img
              src={Image2}
              alt="Product 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white px-6 py-4">
              <h3 className="text-xl font-medium mb-2">Product 2</h3>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="col-span-1 row-span-1 h-1/2 bg-cover bg-center">
          {imgComp}
        </div>
        <div className="col-span-1 row-span-1 h-1/2 bg-cover bg-center">
          {imgComp}
        </div>
      </div>
    );
  };

  return (
    <div className="w-[100vw]">
      <div className="w-[90%] m-auto">
        <p className="gil-bold text-5xl">Products We offer</p>
        <p className="gil-reg text-md opacity-60 w-[50%] pt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
          consequuntur deserunt dignissimos iure hic quas asperiores, in nostrum
          a vero, porro velit voluptas deleniti nam repellat aliquam saepe quo
          corrupti.
        </p>
        <div className="pt-4 w-full">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative h-full"
              >
                <img
                  src={Image1}
                  alt="Product 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white px-6 py-4">
                  <h3 className="text-xl font-medium mb-2">Product 1</h3>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </motion.div>
            </div>
            {gridd()}

            <div className="col-span-2 sm:col-span-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative h-1/2"
              >
                <img
                  src={Image3}
                  alt="Product 3"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white px-6 py-4">
                  <h3 className="text-xl font-medium mb-2">Product 3</h3>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative h-1/2"
              >
                <img
                  src={Image4}
                  alt="Product 4"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white px-6 py-4">
                  <h3 className="text-xl font-medium mb-2">Product 4</h3>
                  <p className="text-base   ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsListSlide;
