CONTEXT=sdl2

CXXFLAGS += -DFENETRE_$(CONTEXT)
CXXFLAGS += -g -W -Wall -Wno-unused-parameter -Wvla -std=c++23 -pedantic # -Wno-deprecated-declarations

LDFLAGS += -g
ifeq "$(shell uname)" "Darwin"
	CXXFLAGS += $(shell pkg-config --cflags glew)
	CXXFLAGS += $(shell pkg-config --cflags $(CONTEXT))

	LDFLAGS += $(shell pkg-config --libs glew)
	LDFLAGS += $(shell pkg-config --libs $(CONTEXT))
	LDFLAGS += -lfreeimage
else
	CXXFLAGS += -I/usr/local/include
	CXXFLAGS += -I/usr/local/include/SDL2
	LDFLAGS += -L/usr/local/lib -lGLEW
	LDFLAGS += -L/usr/local/lib -lSDL2
	LDFLAGS += -lfreeimage -lGL
endif


ifeq "$(shell uname)" "Darwin"
  LDFLAGS += -framework OpenGL
  ifeq "$(CONTEXT)" "glfw3"
    LDFLAGS += -lobjc -framework Foundation -framework Cocoa
  endif
endif

SRC=main
BUILD=./build-$(shell uname)
EXE=$(BUILD)/tp1

SRC = $(wildcard *.cpp) $(wildcard */*.cpp)
OBJ = $(addprefix $(BUILD)/, $(notdir $(SRC:.cpp=.o)))

exe : $(EXE)
run : exe
	$(EXE)
$(EXE) : $(OBJ)
	$(CXX) $(CXXFLAGS) -o$@ $^ $(LDFLAGS)

$(BUILD)/%.o : %.cpp | $(BUILD)
	$(CC) $(CFLAGS) $(CXXFLAGS) -o $@ -c $<

$(BUILD)/%.o : */%.cpp | $(BUILD)
	$(CC) $(CFLAGS) $(CXXFLAGS) -o $@ -c $<

$(BUILD) :
	mkdir -p $@

# nettoyage
clean :
	rm -rf $(BUILD)/

# pour créer le fichier à remettre dans Moodle
remise zip :
	make clean
	rm -f INF2705_remise_tp1.zip
	zip -r INF2705_remise_tp1.zip *.cpp *.h makefile shaders
