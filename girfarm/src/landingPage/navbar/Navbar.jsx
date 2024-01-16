import { Box, Button, Flex, HStack,Link, Input,  Menu, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
//import style from "../../App.css"

const NavBar = (props) => {
 
  //let navigare=useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <NavBarContainer id="nvb" {...props}>
     {/* <img onClick={ ()=>{navigare("/") } }  className={style.myhover} src="https://i.ibb.co/mCb74Rq/murli.png" alt="flip" width="90px" ></img> */}
      {/* <Input   focusBorderColor="#f97634"  placeholder="serach product" width="auto" marginTop={{ base: '10px',sm:"10px", md: '0px', lg: '0px' }} color="white" ></Input> */}
      <h2 style={{fontSize:"25px",fontWeight:"900",marginLeft:"8%"}} >Gir madhuli Farm </h2>
      <MenuToggle toggle={toggle} isOpen={isOpen}/>
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};
// for navscroll
window.addEventListener("scroll",()=>{
   
  const scrollPosition = window.scrollY;
  let x= scrollPosition===0?"rgba(0,0,0,0)":"#6a961f";
  document.getElementById("nvb").style.transition="0.8s";
  document.getElementById("nvb").style.transform="inherit";
  document.getElementById("nvb").style.backgroundColor=x;
  
})
 
const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white" >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" color="white" {...rest}  >
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
 
  //let navigte=useNavigate();
  
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Menu>
          <MenuItem fontWeight="700" fontSize="20px" to="/rooms"> <a href="#home"> Home </a> </MenuItem>
          <MenuItem fontWeight="700"  fontSize="20px" ><a href="#rooms">Rooms </a> </MenuItem>
          <MenuItem fontWeight="700"  fontSize="20px"  > <a href="#gallery"> Gallery  </a>  </MenuItem>
          <MenuItem fontWeight="700"  fontSize="20px" > <a href="#videos"> Videos  </a>  </MenuItem>
        </Menu>

         {
          <Menu  >
             <HStack>
               <MenuItem to="/ragister" >
                 <Button  
                   
                   variant='outline'
                   size="sm"
                   rounded="md"
                   color="white"
                   bg="#d57d11"
                   marginLeft={{sm: "0px",md: "0px",lg: "100px",}}
                   marginRight={{sm: "0px",md: "0px",lg: "100px",}}
                  width="100px"
                  height="35px"
                  borderRadius="20px"
                   _hover={{
                     bg: ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)"]
                   }}
                 >
                   Book Now
                 </Button>
               </MenuItem>
               </HStack>
             </Menu>
         }

        
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
       
       position='fixed'
       top={0}
      as="nav"
      align="center"
      justify="space-between"
      // bg="rgba(0,0,0,0)"
      wrap="wrap"
      w="100%"
      mb={8}
      p={3}
      zIndex={10}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
      marginBottom="0">
      {children}
     
    </Flex>
  );
};

export default NavBar;