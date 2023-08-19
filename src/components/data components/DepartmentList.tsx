import {
  Box,
  FormControlLabel,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { DepartmentData } from "../../departmentData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DepartmentList: React.FC = () => {
  const [departmentStates, setDepartmentStates] = useState(
    DepartmentData.map((dept) => ({
      name: dept.department,
      checked: false,
      subDepartments: dept.sub_departments.map((subDept) => ({
        name: subDept,
        checked: false,
      })),
    }))
  );

  const handleDepartmentChange = (
    deptIndex: number
  ) => {
    const updatedDepartments = [...departmentStates];
    //Toggle parent's state
    updatedDepartments[deptIndex].checked =
      !updatedDepartments[deptIndex].checked;

    // Change state of all sub_departments to parent's state
    updatedDepartments[deptIndex].subDepartments.forEach((subDept) => {
      subDept.checked = updatedDepartments[deptIndex].checked;
    });

    setDepartmentStates(updatedDepartments);
  };

  const handleSubDepartmentChange = (
    deptIndex: number,
    subDeptIndex: number
  ) => {
    const updatedDepartments = [...departmentStates];
    //Toggle sub_department's state
    updatedDepartments[deptIndex].subDepartments[subDeptIndex].checked =
      !updatedDepartments[deptIndex].subDepartments[subDeptIndex].checked;

    // Check if all the sub_departments are selected if yes change parent's state
    const isAllSubDeptsSelected = updatedDepartments[
      deptIndex
    ].subDepartments.every((subDept) => subDept.checked);
    updatedDepartments[deptIndex].checked = isAllSubDeptsSelected;

    setDepartmentStates(updatedDepartments);
  };

  return (
    <Box>
      <Typography variant="h5" textAlign="center">
        Departments
      </Typography>
      {departmentStates.map((dept, deptIndex) => {
        return (
          <div key={deptIndex}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <FormControlLabel
                  label={`${dept.name}`}
                  control={
                    <Checkbox
                      checked={dept.checked}
                      onClick={(e) => e.stopPropagation()}
                      onChange={() =>
                        handleDepartmentChange(deptIndex)
                      }
                    />
                  }
                />
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                  {dept.subDepartments.map((subDept, subDeptIndex) => (
                    <FormControlLabel
                      key={subDeptIndex}
                      label={`${subDept.name}`}
                      control={
                        <Checkbox
                          checked={subDept.checked}
                          onChange={() =>
                            handleSubDepartmentChange(deptIndex, subDeptIndex)
                          }
                        />
                      }
                    />
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </Box>
  );
};

export default DepartmentList;
