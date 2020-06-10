PROJECT_NAME:=reduce-prototype
WORKING_DIR:=$(abspath $(shell dirname $(lastword $(MAKEFILE_LIST))))
ARCHITEKT_DIR:=$(WORKING_DIR)/.preset

include $(ARCHITEKT_DIR)/variables.default.mk
include $(ARCHITEKT_DIR)/js-lib.mk